import React, { useState } from 'react'
import pin from '../../assets/yellow-pin.svg'
import creditCard from '../../assets/credit-card.svg'
import debitCard from '../../assets/debit-card.svg'
import money from '../../assets/money.svg'
import dolar from '../../assets/dolar.svg'
import coffee from '../../assets/coffee.svg'
import trash from '../../assets/trash.svg'
import { Title, BtnPayment, PaymentContainer, PaymentMethod, Container, FormContainer, Amount, Form, Input, GroupInput, CoffeeCard, Item, AmountContainer, Total, TrashButton } from './style'

export function Checkout () {
  const [payment, setPayment] = useState('')
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
            <CoffeeCard>
                <h2>Cafés selecionados</h2>
                <Form>
                    <Item>
                        <img src={coffee} alt="" />
                        <AmountContainer>
                            <span>Expresso Tradicional</span>
                            <div>
                                <Amount>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </Amount>
                                <TrashButton><img src={trash} alt="" />Remover</TrashButton>
                            </div>
                        </AmountContainer>
                        <span><b>R$ 9,90</b></span>
                    </Item>
                    <Item>
                        <img src={coffee} alt="" />
                        <AmountContainer>
                            <span>Expresso Tradicional</span>
                            <div>
                                <Amount>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </Amount>
                                <TrashButton><img src={trash} alt="" />Remover</TrashButton>
                            </div>
                        </AmountContainer>
                        <span><b>R$ 9,90</b></span>
                    </Item>
                    <Total>
                        <div>
                            <span>Total de itens</span>
                            <span>R$ 29,70</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </div>
                        <div>
                            <span><b>Total</b></span>
                            <span><b>R$ 33,70</b></span>
                        </div>
                        <button>Confirmar Pedido</button>
                    </Total>
                </Form>
            </CoffeeCard>
        </Container>
  )
}
