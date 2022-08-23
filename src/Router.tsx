import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Template } from './pages'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router () {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route path="/" element={<Home />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="success" element={<Success />} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}
