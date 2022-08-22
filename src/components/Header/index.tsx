import React from 'react'
import { Container, LocationContainer, Location, Cart, Badge } from './style'
import logo from '../../assets/logo.svg'
import pin from '../../assets/pin.svg'
import cart from '../../assets/yellow-cart.svg'

export function Header () {
  return (
        <Container>
                <img src={logo} alt="coffe delivery" />
                <LocationContainer>
                    <Location><img src={pin} alt="location" /> São José do Rio Preto / SP</Location>
                    <Cart><img src={cart} alt="" />
                        <Badge>3</Badge>
                    </Cart>
                </LocationContainer>
        </Container>
  )
}
