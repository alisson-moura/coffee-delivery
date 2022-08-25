import React, { createContext, useState } from 'react'

export type CartProduct = {
  id: number
  amount: number
}
type Location = {
    cep: string
    address: string
    number: string
    district: string
    city: string
    uf: string
    payment: string
    complement?: string
}

interface I_CartProduct {
  products: CartProduct[]
  location?: Location
  updateProducts(data: CartProduct): void
  closeRequest(location: Location): void
}

export const CartContext = createContext({} as I_CartProduct)

export function CartProvider ({ children }: any) {
  const [products, setProducts] = useState<CartProduct[]>([])
  const [location, setLocation] = useState<Location | undefined>()

  const updateProducts = (data: CartProduct): void => {
    data.amount > 0
      ? setProducts((prevState) => {
        const index = prevState.findIndex(p => p.id === data.id)
        if (index !== -1) {
          prevState[index] = data
          return [...prevState]
        }
        return [...prevState, data]
      })
    // ([...prevState.filter(product => product.id !== data.id), data]))
      : setProducts((prevState) => prevState.filter(p => p.id !== data.id))
  }

  const closeRequest = (location: Location):void => {
    setProducts([])
    setLocation({ ...location })
  }

  return (
    <CartContext.Provider value={{ products, updateProducts, closeRequest, location }} >
      {children}
    </CartContext.Provider>
  )
}
