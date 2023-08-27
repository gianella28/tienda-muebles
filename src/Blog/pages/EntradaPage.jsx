import { nosotros } from '../../assets/img';
import "./BlogPage.css"
export const EntradaPage = () => {
  return (
    <>
        <main className="contenido-principal contenedor">
            <h2 className="text-center">Entrada Blog</h2>
                    <article className="entrada contenido-entrada-blog">
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
        </main>
    </>
  )
}
