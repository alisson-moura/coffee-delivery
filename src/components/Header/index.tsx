import React from 'react'
import { Link } from 'react-router-dom'
import { Container, LocationContainer, Location, Content } from './style'
import logo from '../../assets/logo.svg'
import pin from '../../assets/pin.svg'
import { CartButton } from '../Cart'

export function Header () {
  return (
    <Container>
      <Content>
        <Link to={'/'}>
        <img src={logo} alt="coffe delivery" />
        </Link>
        <LocationContainer>
          <Location><img src={pin} alt="location" /> São José do Rio Preto / SP</Location>
          <CartButton />
        </LocationContainer>
      </Content>
    </Container>
  )
}
