import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart, Badge } from './style'
import { cart } from '../../assets'
import { CartContext } from '../../contexts/cart'

export function CartButton () {
  const { products } = useContext(CartContext)

  return (
    <Link hidden={!(products.length > 0)} to={'checkout'}>
      <Cart><img src={cart} alt="" />
        {products && products.length > 0 && (<Badge>{products.length}</Badge>)}
      </Cart>
    </Link>
  )
}
