import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EntradaBlog } from '../pages/EntradaBlog'


export const EntradaRoutes = () => {
  return (
    <Routes>
        <Route path="/entradaBlog/:id" element={<EntradaBlog />} />
        <Route path="/*" element={<EntradaBlog />} />
       
    </Routes>
  )
}

