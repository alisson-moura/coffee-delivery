import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function Template () {
  return (
        <>
        <Header />
        <Outlet />
        </>
  )
}
