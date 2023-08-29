import React from 'react'
import { Categorias, NuestrosProductos, SobreNosotros } from '../components'
import './InicioPages.css'
import principal from '../../assets/img/principal.jpg';

export const InicioPages = () => {
  return (
    <>
      <div className="hero">
        <img src={principal} alt="principal" />
      </div>
      <Categorias/>
      <SobreNosotros/>
      <NuestrosProductos/>
    </>
  )
}
