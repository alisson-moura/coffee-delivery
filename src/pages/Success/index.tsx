import React, { useContext } from 'react'
import { Container, Details, Items, Item } from './style'
import delivery from '../../assets/delivery.svg'
import currency from '../../assets/currency.svg'
import timer from '../../assets/timer.svg'
import pin from '../../assets/pinRound.svg'
import { CartContext } from '../../contexts/cart'
/**
 * [ ] Exibir dados do pedido
 * [x] Limpar estado do carrinho
 */
export function Success () {
  const { location } = useContext(CartContext)
  const displayPaymentMethod = (payment?: string) => {
    switch (payment) {
      case 'creditCard':
        return 'Cartão de Crédito'
      case 'debitCart':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'

      default: return 'Desconhecido'
    }
  }
  return (
        <Container>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
            <Details>
                <Items>
                    <Item>
                        <img src={pin} alt="" />
                        <div> <p>Entrega em <b>{location?.address}, {location?.number}</b></p>
                            <span>{location?.district} - {location?.city}, {location?.uf}</span>
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
                            <b>{displayPaymentMethod(location?.payment)}</b>
                        </div>
                    </Item>
                </Items>
                <img src={delivery} alt="delivery" />
            </Details>
        </Container>
  )
}
