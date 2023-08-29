import { categoria1, categoria2, categoria3 } from "../../assets/img"

export const Categorias = () => {
  return (
    <>
        <section className="contenedor categorias">
            <h2 className="text-center">Categorias de Productos</h2>
            <div className="listado-categorias">
                <div className="categoria">
                    <img src={categoria1} alt="escritorio" />
                    <a href="#">Oficina</a>
                </div>
                <div className="categoria">
                    <img src={categoria2}  alt="escritorio" />
                    <a href="#">Hogar</a>
                </div>
                <div className="categoria">
                    <img src={categoria3}  alt="escritorio" />
                    <a href="#">Cocina</a>
                </div>
            </div>
        </section>
    </>
  )
}
