import React from 'react'
import { Container, Details, Items, Item } from './style'
import delivery from '../../assets/delivery.svg'
import currency from '../../assets/currency.svg'
import timer from '../../assets/timer.svg'
import pin from '../../assets/pinRound.svg'

export function Success () {
  return (
        <Container>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
            <Details>
                <Items>
                    <Item>
                        <img src={pin} alt="" />
                        <div> <p>Entrega em <b>Rua João Daniel Martinelli, 102</b></p>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </div>
                    </Item>
                    <Item>
                        <img src={timer} alt="" />
                        <div>
                            <p>Previsão de entrega</p>
                            <b>20 min - 30min</b>
                        </div>
                    </Item>
                    <Item>
                        <img src={currency} alt="" />
                        <div>
                            <p>Pagamento na entrega</p>
                            <b>Cartão de Crédito</b>
                        </div>
                    </Item>
                </Items>
                <img src={delivery} alt="delivery" />
            </Details>
        </Container>
  )
}
