import React, { useContext, useState } from 'react'
import { ProductsType } from '..'
import { CartContext } from '../../../contexts/cart'
import { Product, Tags, PriceContainer, Price } from './style'
import { purpleCart } from '../../../assets'

interface CardProps {
    product: ProductsType
}

export function Card ({ product }: CardProps) {
  const { updateProducts } = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  function updateAmountProduct (type: string): void {
    type === 'sum'
      ? setAmount(state => state + 1)
      : amount > 0
        ? setAmount(state => state - 1)
        : setAmount(0)
  }

  return (
        <Product>
            <img src={product.img} alt="" />
            <Tags>
                {product.types.map(type => (<span key={type}>{type.toUpperCase()}</span>))}
            </Tags>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <PriceContainer>
                <span>R$ <b>{product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</b></span>
                <Price>
                    <div>
                        <button onClick={() => updateAmountProduct('sub')}>-</button>
                        <span>{amount}</span>
                        <button onClick={() => updateAmountProduct('sum')}>+</button>
                    </div>
                    <button onClick={() => updateProducts({
                      id: product.id,
                      amount
                    })}><img src={purpleCart} alt="" /></button>
                </Price>
            </PriceContainer>
        </Product>
  )
}
