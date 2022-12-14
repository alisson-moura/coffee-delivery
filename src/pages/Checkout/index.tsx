import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { creditCard, debitCard, money, dolar, yellowPin } from '../../assets'
import { Title, BtnPayment, PaymentContainer, Load, PaymentMethod, Container, FormContainer, Form, Input, GroupInput, CoffeeCard, Total } from './style'
import { CartContext } from '../../contexts/cart'
import { filterProduct, sendRequest } from '../../provider/fake-api-data'
import { formatCEP, onlyNumbers, toUpperCase } from '../../utils/masks'
import { Item } from './Item'
import { ProductsType } from '../Home'

type Inputs = {
  cep: string
  address: string
  number: string
  district: string
  city: string
  uf: string
  payment: string
  complement?: string
}
export function Checkout () {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState<Inputs>({
    cep: '',
    address: '',
    number: '',
    district: '',
    city: '',
    uf: '',
    payment: ''
  })
  const [errors, setErrors] = useState<string[]>([])
  const [load, setLoad] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<ProductsType[]>([])
  const [total, setTotal] = useState<number>(0)
  const { products, closeRequest } = useContext(CartContext)

  useEffect(() => {
    const items: ProductsType[] = []
    products.forEach(element => {
      const item = filterProduct(element.id)
      if (item) items.push(item)
    })

    setSelectedProducts(items)
  }, [products])

  useEffect(() => {
    const sum = products.reduce((acc, item) => {
      const product = selectedProducts.find(p => p.id === item.id)
      if (product) {
        const price = product.price! * item.amount
        return acc + price
      }
      return 0
    }, 0)
    setTotal(sum)
    if (products.length === 0) navigate('/')
  }, [products, selectedProducts])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs(prevState => {
      if (Object.hasOwn(prevState, event.target.name)) {
        prevState[event.target.name as keyof Inputs] = event.target.value
      }
      return { ...prevState }
    })
    setErrors(prevState => {
      const elements = prevState.filter(state => state !== event.target.name)
      return [...elements]
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const inputErrors: string[] = []
    for (const key in inputs) {
      const element = inputs[key as keyof Inputs]
      if (element !== undefined && element.length === 0) { inputErrors.push(key) }
    }
    setErrors([...inputErrors])
    if (inputErrors.length === 0) {
      const items = products.map(p => (
        {
          amount: p.amount,
          product_id: p.id
        })
      )
      const location = {
        cep: inputs.cep,
        address: inputs.address,
        number: inputs.number,
        district: inputs.district,
        city: inputs.city,
        uf: inputs.uf,
        payment: inputs.payment,
        complement: inputs.complement
      }
      setLoad(true)
      const response = await sendRequest({ ...location, items })
      setLoad(false)
      if (response.status === 200) {
        closeRequest(location)
        navigate('/success')
      }
    }
  }

  return (
    <Container>
      <FormContainer>
        <h2>Complete seu pedido</h2>
        <Form>
          <Title><img src={yellowPin} alt="" /> <span>Endere??o de Entrega</span></Title>
          <p>Informe o endere??o onde deseja receber seu pedido</p>
          <GroupInput>
            <Input
              error={!!errors.find(i => i === 'cep')}
              name='cep'
              col="4"
              onChange={(e) => {
                e.target.value = formatCEP(e.target.value)
                handleChange(e)
              }} placeholder="CEP" />
          </GroupInput>
          <GroupInput>
            <Input
              error={!!errors.find(i => i === 'address')}
              name='address'
              onChange={handleChange}
              col="12"
              placeholder="Rua" />
          </GroupInput>
          <GroupInput>
            <Input
              error={!!errors.find(i => i === 'number')}
              name='number'
              col="4"
              placeholder="N??mero"
              type="text"
              onChange={(e) => {
                e.target.value = onlyNumbers(e.target.value)
                handleChange(e)
              }} maxLength={5} />
            <Input
              name='complement'
              col="8"
              placeholder="Complemento" />
          </GroupInput>
          <GroupInput>
            <Input
              name='district'
              error={!!errors.find(i => i === 'district')}
              onChange={handleChange}
              col="4"
              placeholder="Bairro" />
            <Input
              error={!!errors.find(i => i === 'city')}
              name='city'
              onChange={handleChange}
              col="6"
              placeholder="Cidade" />
            <Input
              error={!!errors.find(i => i === 'uf')}
              name='uf'
              col="2"
              maxLength={2}
              onChange={(e) => {
                e.target.value = toUpperCase(e.target.value)
                handleChange(e)
              }}
              placeholder="UF" />
          </GroupInput>
        </Form>
        <PaymentContainer error={!!errors.find(i => i === 'payment')}>
          <h2><img src={dolar} alt="" />Pagamento</h2>
          <p>O pagamento ?? feito na entrega. Escolha a forma que deseja pagar</p>
          <PaymentMethod>
            <BtnPayment checked={inputs.payment === 'creditCard'}><img src={creditCard} alt="" /> Cart??o de Cr??dito
              <input type="radio" value='creditCard' name="payment" onChange={handleChange} />
            </BtnPayment>
            <BtnPayment checked={inputs.payment === 'debitCard'}> <img src={debitCard} alt="" /> Cart??o de D??bito
              <input type="radio" value='debitCard' name="payment" onChange={handleChange} />
            </BtnPayment>
            <BtnPayment checked={inputs.payment === 'money'}> <img src={money} alt="" /> Dinheiro
              <input type="radio" value='money' name="payment" onChange={handleChange} />
            </BtnPayment>
          </PaymentMethod>
        </PaymentContainer>
      </FormContainer>
      {selectedProducts.length > 0 && (
        <CoffeeCard>
          <h2>Caf??s selecionados</h2>
          <Form onSubmit={handleSubmit}>
            {selectedProducts.map(product => (<Item product={product} key={product.id} />))}
            <Total>
              <div>
                <span>Total de itens</span>
                <span>R$ {total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 5,50</span>
              </div>
              <div>
                <span><b>Total</b></span>
                <span><b>R$ {(total + 5.50).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</b></span>
              </div>
              <button type='submit'>{load ? <Load /> : 'Confirmar Pedido'}</button>
            </Total>
          </Form>
        </CoffeeCard>
      )}
    </Container>
  )
}
