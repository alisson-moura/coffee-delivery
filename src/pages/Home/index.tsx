import React, { useContext, useState, useEffect } from 'react'
import { Banner, ItemsContainer, Items, ProductsContainer, Products, Price, PriceContainer, Product, Tags } from './style'
import { banner, box, cart, timer, icon, purpleCart } from '../../assets'
import { getAllData } from '../../provider/fake-api-data'
import { CartContext } from '../../contexts/cart'

type ProductsType = {
  title: string
  description: string
  types: string[]
  img: string
  id: number
  price: number
  amount: number
}

export function Home () {
  const { updateProducts } = useContext(CartContext)
  const [products, setProducts] = useState<ProductsType[]>([])

  useEffect(() => setProducts([...getAllData().map(data => ({ ...data, amount: 1 }))]), [])

  function updateAmountProduct (id: number, type: string): void {
    const product = products.find(p => p.id === id)
    if (product) {
      type === 'sum'
        ? product.amount += 1
        : product.amount > 0
          ? product.amount -= 1
          : product.amount = 0
      setProducts((prevState) => {
        const products = prevState.map(p => {
          if (p.id === product.id) p = product
          return p
        })
        return [...products]
      })
    }
  }

  function addCart (id: number) {
    const product = products.find(p => p.id === id)
    if (product) {
      updateProducts({
        id: product.id,
        amount: product.amount
      })
    }
  }

  return (
    <>
      <Banner>
        <ItemsContainer >
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <Items>
            <span><img src={cart} alt="Compra simples e segura" />Compra simples e segura</span>
            <span><img src={box} alt="Embalagem mantém o café intacto" />Embalagem mantém o café intacto</span>
            <span><img src={timer} alt="Entrega rápida e rastreada" />Entrega rápida e rastreada</span>
            <span><img src={icon} alt="O café chega fresquinho até você" />O café chega fresquinho até você</span>
          </Items>
        </ItemsContainer>
        <img src={banner} alt="coffe" />
      </Banner>
      <ProductsContainer>
        <h2>Nossos Cafés</h2>
        <Products>
          {products && products.map(product =>
            <Product key={product.id}>
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
                    <button onClick={() => updateAmountProduct(product.id, 'sub')}>-</button>
                    <span>{product.amount}</span>
                    <button onClick={() => updateAmountProduct(product.id, 'sum')}>+</button>
                  </div>
                  <button onClick={() => addCart(product.id)}><img src={purpleCart} alt="" /></button>
                </Price>
              </PriceContainer>
            </Product>
          )}
        </Products>
      </ProductsContainer>
    </>
  )
}
