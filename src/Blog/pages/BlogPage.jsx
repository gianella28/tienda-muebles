import React from 'react'
import { NavLink } from 'react-router-dom';
import "./BlogPage.css";
import { blogs } from '../data/blogs';



 export const BlogPage = () => {
  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Nuestro Blog</h2>
        <section className="contenedor-blog">
          <div className="blog">
            {blogs.map((entrada) => (
              <article key={entrada.id} className="entrada">
                <h2>{entrada.titulo}</h2>
                <div className="imagen">
                  <img src={entrada.imagen} alt="imagen blog" className="class" />
                    <div className="contenido-blog">
                      <div className="entrada-meta">
                        <p>Fecha: <span>{entrada.fecha}</span></p>
                        <p>Escrito por: <span>{entrada.autor}</span></p>
                      </div>
                      <div className="entrada-blog">
                        <p>{entrada.contenido}</p>
                      </div>
                    </div>
                </div>
                <NavLink to={`/entradaBlog/${entrada.id}`} className="btn max-widt">Leer</NavLink>
                <div>{entrada.id}f</div>
              </article>
            ))}
          </div>
          <aside>
            <h3>Otras Entradas de Blog</h3>
            <ul>
              <li>
                <NavLink to="/entradaBlog/1">Guía de colores</NavLink>
              </li>
              <li>
                <NavLink to="/entradaBlog/2">Nuevos Modelos</NavLink>
              </li>
              {/* Agrega otros enlaces aquí */}
            </ul>
          </aside>
        </section>
      </main>
    </>
  );
};



