import React from 'react'
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";


export const EntradaBlog = () => {
    /*const params = useParams();
    const { id } = params;*/

    const { id } =useParams();
  
  const entrada = blogs.find((entrada) => entrada.id === parseInt(id));

  if (!entrada) {
    return <div>No se encontró la entrada del blog.</div>;
  }

  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Entrada Blog</h2>
      <article className="entrada contenido-entrada-blog">
        <h2>{entrada.titulo}</h2>
        <div className="imagen">
          <img src={entrada.imagen} alt={`imagen ${entrada.titulo}`} className="class" />
          <div className="entrada-meta">
            <p>Fecha: <span>{entrada.fecha}</span></p>
            <p>Escrito por: <span>{entrada.autor}</span></p>
          </div>
          <div className="entrada-blog">
            <p>{entrada.contenido}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

