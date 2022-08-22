import React from 'react'
import { Banner, ItemsContainer, Items, ProductsContainer, Products, Price, PriceContainer, Product } from './style'
import banner from '../../assets/banner.svg'
import box from '../../assets/box.svg'
import cart from '../../assets/cart.svg'
import timer from '../../assets/timer.svg'
import coffe from '../../assets/icon.svg'
import purpleCart from '../../assets/purple-cart.svg'
import coffeeProduct from '../../assets/coffee.svg'

export function Home () {
  return (
        <>
            <Banner>
                <ItemsContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <Items>
                        <span><img src={cart} alt="Compra simples e segura" />Compra simples e segura</span>
                        <span><img src={box} alt="Embalagem mantém o café intacto" />Embalagem mantém o café intacto</span>
                        <span><img src={timer} alt="Entrega rápida e rastreada" />Entrega rápida e rastreada</span>
                        <span><img src={coffe} alt="O café chega fresquinho até você" />O café chega fresquinho até você</span>
                    </Items>
                </ItemsContainer>
                <img src={banner} alt="coffe" />
            </Banner>
            <ProductsContainer>
                <h2>Nossos Cafés</h2>
                <Products>
                    <Product>
                        <img src={coffeeProduct} alt="" />
                        <span>TRADICIONAL</span>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceContainer>
                            <span>R$ <b>9,90</b></span>
                            <Price>
                                <div>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <button><img src={purpleCart} alt="" /></button>
                            </Price>
                        </PriceContainer>
                    </Product>
                    <Product>
                        <img src={coffeeProduct} alt="" />
                        <span>TRADICIONAL</span>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceContainer>
                            <span>R$ <b>9,90</b></span>
                            <Price>
                                <div>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <button><img src={purpleCart} alt="" /></button>
                            </Price>
                        </PriceContainer>
                    </Product>
                    <Product>
                        <img src={coffeeProduct} alt="" />
                        <span>TRADICIONAL</span>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceContainer>
                            <span>R$ <b>9,90</b></span>
                            <Price>
                                <div>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <button><img src={purpleCart} alt="" /></button>
                            </Price>
                        </PriceContainer>
                    </Product>
                    <Product>
                        <img src={coffeeProduct} alt="" />
                        <span>TRADICIONAL</span>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceContainer>
                            <span>R$ <b>9,90</b></span>
                            <Price>
                                <div>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <button><img src={purpleCart} alt="" /></button>
                            </Price>
                        </PriceContainer>
                    </Product>
                    <Product>
                        <img src={coffeeProduct} alt="" />
                        <span>TRADICIONAL</span>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceContainer>
                            <span>R$ <b>9,90</b></span>
                            <Price>
                                <div>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <button><img src={purpleCart} alt="" /></button>
                            </Price>
                        </PriceContainer>
                    </Product>
                </Products>
            </ProductsContainer>
        </>
  )
}
