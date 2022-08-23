import React, { createContext, useState } from 'react'

type CartProduct = {
  id: number
  amount: number
}
interface I_CartProduct {
  products: CartProduct[]
  updateProducts(data: CartProduct): void
}

export const CartContext = createContext({} as I_CartProduct)

export function CartProvider ({ children }: any) {
  const [products, setProducts] = useState<CartProduct[]>([])

  const updateProducts = (data: CartProduct): void => {
    data.amount > 0
      ? setProducts((prevState) =>
        ([...prevState.filter(product => product.id !== data.id), data]))
      : setProducts((prevState) => prevState.filter(p => p.id !== data.id))
  }

  return (
    <CartContext.Provider value={{ products, updateProducts }} >
      {children}
    </CartContext.Provider>
  )
}
