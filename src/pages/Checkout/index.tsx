import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { creditCard, debitCard, money, dolar, trash, yellowPin } from '../../assets'
import { Title, BtnPayment, PaymentContainer, Load, PaymentMethod, Container, FormContainer, Amount, Form, Input, GroupInput, CoffeeCard, Item, AmountContainer, Total, TrashButton } from './style'
import { CartContext } from '../../contexts/cart'
import { filterProduct, sendRequest } from '../../provider/fake-api-data'
import { formatCEP, onlyNumbers, toUpperCase } from '../../utils/masks'

type SelectedProducts = {
  title?: string
  img?: string
  price?: number
  id?: number
  amount?: number
}
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
  const [selectedProducts, setSelectedProducts] = useState<SelectedProducts[]>([])
  const { products, updateProducts, closeRequest } = useContext(CartContext)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const data = products.map(p => {
      const product = filterProduct(p.id)
      return {
        title: product?.title,
        img: product?.img,
        price: product?.price,
        id: product?.id
      }
    })
    setSelectedProducts((prevState) => [...data])
  }, [])

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

  function removeProducts (id: number) {
    console.log(id)
    setSelectedProducts(prevState => {
      const data = prevState.filter(p => p.id !== id)
      return [...data]
    })
    const product = products.find(p => p.id === id)
    if (product) {
      updateProducts({
        id: product.id,
        amount: 0
      })
    }
  }

  function updateAmountProduct (id: number, type: string): void {
    const product = products.find(p => p.id === id)
    if (product) {
      type === 'sum'
        ? product.amount += 1
        : product.amount > 0
          ? product.amount -= 1
          : product.amount = 0
      if (product.amount === 0) { removeProducts(product.id) }
      updateProducts({
        id: product.id,
        amount: product.amount
      })
    }
  }

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
          <Title><img src={yellowPin} alt="" /> <span>Endereço de Entrega</span></Title>
          <p>Informe o endereço onde deseja receber seu pedido</p>
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
              placeholder="Número"
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
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          <PaymentMethod>
            <BtnPayment checked={inputs.payment === 'creditCard'}><img src={creditCard} alt="" /> Cartão de Crédito
              <input type="radio" value='creditCard' name="payment" onChange={handleChange} />
            </BtnPayment>
            <BtnPayment checked={inputs.payment === 'debitCard'}> <img src={debitCard} alt="" /> Cartão de Débito
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
          <h2>Cafés selecionados</h2>
          <Form onSubmit={handleSubmit}>
            {selectedProducts.length > 0 && selectedProducts.map(product => (
              product && (
                <Item key={product.id}>
                  <img src={product.img} alt={product.title} />
                  <AmountContainer>
                    <span>{product.title}</span>
                    <div>
                      <Amount>
                        <button type='button' onClick={() => updateAmountProduct(product.id!, 'sub')}>-</button>
                        <span>{products.find(p => p.id === product.id)?.amount}</span>
                        <button type='button' onClick={() => updateAmountProduct(product.id!, 'sum')}>+</button>
                      </Amount>
                      <TrashButton type='button' onClick={() => removeProducts(product.id!)}><img src={trash} alt="" />Remover</TrashButton>
                    </div>
                  </AmountContainer>
                  <span><b>R$ {product.price?.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</b></span>
                </Item>
              )
            )
            )}
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
