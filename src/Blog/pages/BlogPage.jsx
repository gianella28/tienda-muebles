import React from 'react'

import { NavLink, useNavigate,  } from 'react-router-dom';
import { nosotros } from '../../assets/img';
import "./BlogPage.css"

export const BlogPage = () => {
    const navigate = useNavigate();
  return (
    <>
        <main className="contenido-principal contenedor">
            <h2 className="text-center">Nuestro Blog</h2>
            <section className="contenedor-blog">
                <div className="blog">
                    <article className="entrada">
                       <h2>Guía de Colores</h2> 
                       <div className="imagen">
                            <img src={nosotros} alt="imagen blog" className="class" />
                            <div className="entrada-meta">
                                <p>Fecha: <span>26 de agosto del 2023</span></p>
                                <p>Escrito por: <span>Tienda muebles</span></p>
                            </div>
                            <div className="entrada-blog">
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Dignissimos veniam eveniet tempore vel sint assumenda,
                                   consectetur quisquam illum autem mollitia culpa. 
                                   Consequuntur voluptas nulla facilis eligendi harum necessitatibus consectetur incidunt.  
                                </p>
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Dignissimos veniam eveniet tempore vel sint assumenda,
                                   consectetur quisquam illum autem mollitia culpa. 
                                   Consequuntur voluptas nulla facilis eligendi harum necessitatibus consectetur incidunt.  
                                </p>
                            </div>
                       </div>
                       <NavLink to="/entradaBlog" className="btn max-widt">Leer</NavLink>
                    </article>
                    <article className="entrada">
                       <h2>Guía de Colores</h2> 
                       <div className="imagen">
                            <img src={nosotros} alt="imagen blog" className="class" />
                            <div className="entrada-meta">
                                <p>Fecha: <span>26 de agosto del 2023</span></p>
                                <p>Escrito por: <span>Tienda muebles</span></p>
                            </div>
                            <div className="entrada-blog">
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Dignissimos veniam eveniet tempore vel sint assumenda,
                                   consectetur quisquam illum autem mollitia culpa. 
                                   Consequuntur voluptas nulla facilis eligendi harum necessitatibus consectetur incidunt.  
                                </p>
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Dignissimos veniam eveniet tempore vel sint assumenda,
                                   consectetur quisquam illum autem mollitia culpa. 
                                   Consequuntur voluptas nulla facilis eligendi harum necessitatibus consectetur incidunt.  
                                </p>
                            </div>
                       </div>
                    </article>
                </div>
                <aside>
                    <h3>Otras Entradas de Blog</h3>
                    <ul>
                        <li>
                            <a href="entrada">Guía de colores</a>
                        </li>
                        <li>
                            <a href="entrada">Nuevos Modelos</a>
                        </li>
                        <li>
                            <a href="entrada">Guía para diseño de interiores</a>
                        </li>
                        <li>
                            <a href="entrada">Guía para diseño de exteriores</a>
                        </li>
                        
                    </ul>
                </aside>
            </section>
        </main>
    </>
  )
}
