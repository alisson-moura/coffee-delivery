import React, { useContext, useEffect, useState } from 'react'
import pin from '../../assets/yellow-pin.svg'
import creditCard from '../../assets/credit-card.svg'
import debitCard from '../../assets/debit-card.svg'
import money from '../../assets/money.svg'
import dolar from '../../assets/dolar.svg'
import trash from '../../assets/trash.svg'
import { Title, BtnPayment, PaymentContainer, PaymentMethod, Container, FormContainer, Amount, Form, Input, GroupInput, CoffeeCard, Item, AmountContainer, Total, TrashButton } from './style'
import { CartContext } from '../../contexts/cart'
import { filterProduct } from '../../provider/fake-api-data'

type SelectedProducts = {
    title?: string
    img?: string
    price?: number
    id?: number
    amount?: number
}
export function Checkout () {
  const [payment, setPayment] = useState('')
  const [selectedProducts, setSelectedProducts] = useState<SelectedProducts[]>([])
  const { products, updateProducts } = useContext(CartContext)
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

  function removeProducts (id: number) {
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
  }, [products, selectedProducts])

  const handlePaymentOptions = ({ target }: any): void => {
    setPayment(target.value)
  }

  return (
        <Container>
            <FormContainer>
                <h2>Complete seu pedido</h2>
                <Form>
                    <Title><img src={pin} alt="" /> <span>Endereço de Entrega</span></Title>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                    <GroupInput>
                        <Input col="4" placeholder="CEP" />
                    </GroupInput>
                    <GroupInput>
                        <Input col="12" placeholder="Rua" />
                    </GroupInput>
                    <GroupInput>
                        <Input col="4" placeholder="Número" />
                        <Input col="8" placeholder="Complemento" />
                    </GroupInput>
                    <GroupInput>
                        <Input col="4" placeholder="Bairro" />
                        <Input col="6" placeholder="Cidade" />
                        <Input col="2" placeholder="UF" />
                    </GroupInput>
                </Form>
                <PaymentContainer>
                    <h2><img src={dolar} alt="" />Pagamento</h2>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <PaymentMethod>
                        <BtnPayment checked={payment === 'creditCard'}><img src={creditCard} alt="" /> Cartão de Crédito
                            <input type="radio" value='creditCard' name="payment" onChange={handlePaymentOptions} />
                        </BtnPayment>
                        <BtnPayment checked={payment === 'debitCard'}> <img src={debitCard} alt="" /> Cartão de Débito
                            <input type="radio" value='debitCard' name="payment" onChange={handlePaymentOptions} />
                        </BtnPayment>
                        <BtnPayment checked={payment === 'money'}> <img src={money} alt="" /> Dinheiro
                            <input type="radio" value='money' name="payment" onChange={handlePaymentOptions} />
                        </BtnPayment>
                    </PaymentMethod>
                </PaymentContainer>
            </FormContainer>
            {selectedProducts.length > 0 && (
                <CoffeeCard>
                    <h2>Cafés selecionados</h2>
                    <Form>
                        {selectedProducts.length > 0 && selectedProducts.map(product => (
                          product && (
                                <Item key={product.id}>
                                    <img src={product.img} alt={product.title} />
                                    <AmountContainer>
                                        <span>{product.title}</span>
                                        <div>
                                            <Amount>
                                                <button onClick={() => updateAmountProduct(product.id!, 'sub')}>-</button>
                                                <span>{products.find(p => p.id === product.id)?.amount}</span>
                                                <button onClick={() => updateAmountProduct(product.id!, 'sum')}>+</button>
                                            </Amount>
                                            <TrashButton onClick={() => removeProducts(product.id!)}><img src={trash} alt="" />Remover</TrashButton>
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
                            <button>Confirmar Pedido</button>
                        </Total>
                    </Form>
                </CoffeeCard>
            )}
        </Container>
  )
}
