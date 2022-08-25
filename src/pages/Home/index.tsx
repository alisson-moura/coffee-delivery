import React, { useEffect, useState } from 'react'
import { Banner, ItemsContainer, Items, ProductsContainer, Products, LoadAnimation } from './style'
import { banner, box, cart, timer, icon } from '../../assets'
import { Card } from './Card'
import { getAllData } from '../../provider/fake-api-data'

export type ProductsType = {
  title: string
  description: string
  types: string[]
  img: string
  id: number
  price: number
}

export function Home () {
  const [loadData, setLoadData] = useState<boolean>(true)
  const [products, setProducts] = useState<ProductsType[]>([])

  useEffect(() => {
    async function loadCoffees () {
      setLoadData(true)
      const response = await getAllData()
      if (response.status === 200) setProducts([...response.data])
      setLoadData(false)
    }
    loadCoffees()
  }, [])

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
        {loadData
          ? <LoadAnimation><div /></LoadAnimation>
          : (<Products>
            {products.map(product =>
              <Card product={product} key={product.id} />
            )}
          </Products>)}
      </ProductsContainer>
    </>
  )
}
