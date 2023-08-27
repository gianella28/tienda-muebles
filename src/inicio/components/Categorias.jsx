import React from 'react'

export const Categorias = () => {
  return (
    <>
        <section className="contenedor categorias">
            <h2 className="text-center">Categorias de Productos</h2>
            <div className="listado-categorias">
                <div className="categoria">
                    <img src="src/assets/img/categoria1.jpg" alt="escritorio" />
                    <a href="#">Oficina</a>
                </div>
                <div className="categoria">
                    <img src="src/assets/img/categoria2.jpg" alt="escritorio" />
                    <a href="#">Hogar</a>
                </div>
                <div className="categoria">
                    <img src="src/assets/img/categoria3.jpg" alt="escritorio" />
                    <a href="#">Cocina</a>
                </div>
            </div>
        </section>
    </>
  )
}
