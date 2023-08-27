import React from 'react'
import { Categorias, Footer, NavBar, NuestrosProductos, SobreNosotros } from '../components'
import './InicioPages.css'
import { InicioRoutes } from '../../router/InicioRoutes'

export const InicioPages = () => {
  return (
    <>
      <div className="hero"></div>
      <Categorias/>
      <SobreNosotros/>
      <NuestrosProductos/>
    </>
  )
}
