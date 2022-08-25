import React, { useContext } from 'react'
import { trash } from '../../../assets'
import { CartContext } from '../../../contexts/cart'
import { ProductsType } from '../../Home'

import { AmountContainer, Amount, TrashButton, Container } from './style'

export function Item (props: { product: ProductsType }) {
  const { products, updateProducts } = useContext(CartContext)
  const product = props.product

  const removeProduct = (): void => {
    updateProducts({
      id: product.id,
      amount: 0
    })
  }
  const updateAmount = (type: string): void => {
    const item = products.find(p => p.id === product.id)
    if (item) {
      type === 'sum'
        ? updateProducts({ id: product.id, amount: item.amount + 1 })
        : item.amount > 0
          ? updateProducts({ id: product.id, amount: item.amount - 1 })
          : updateProducts({ id: product.id, amount: 0 })
    }
  }
  return (
        <Container>
            <img src={product.img} alt={product.title} />
            <AmountContainer>
                <span>{product.title}</span>
                <div>
                    <Amount>
                        <button type='button' onClick={() => updateAmount('sub')}>-</button>
                        <span>{products.find(p => p.id === product.id)?.amount}</span>
                        <button type='button' onClick={() => updateAmount('sum')}>+</button>
                    </Amount>
                    <TrashButton type='button' onClick={() => removeProduct()}><img src={trash} alt="" />Remover</TrashButton>
                </div>
            </AmountContainer>
            <span><b>R$ {product.price?.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</b></span>
        </Container>
  )
}
