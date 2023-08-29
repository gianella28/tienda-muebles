import { producto1, producto2, producto3, producto4, producto5, producto6 } from '../../assets/img';

export const NuestrosProductos = () => {
  return (
   <>
   <main className="contenido-principal contenedor">
      <h2 className="text-center">Nuestros Productos</h2>
      <div className="listado-productos">
        <div className="producto">
          <img src={producto1} alt="Imagen Producto" />
          <div className="texto-producto">
            <h3>Producto 1</h3>
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio.
            </p>
            <p className="precio">$500</p>
            <a className="btn" href="#">Agregar al Carrito</a>
          </div>
        </div>

        <div className="producto">
          <img src={producto2} alt="Imagen Producto" />
          <div className="texto-producto">
            <h3>Producto 2</h3>
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio.
            </p>
            <p className="precio">$500</p>
            <a className="btn" href="#">Agregar al Carrito</a>
          </div>
        </div>

        <div className="producto">
          <img src={producto3} alt="Imagen Producto" />
          <div className="texto-producto">
            <h3>Producto 3</h3>
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio.
            </p>
            <p className="precio">$500</p>
            <a className="btn" href="#">Agregar al Carrito</a>
          </div>
        </div>
    
        <div className="producto">
          <img src={producto4} alt="Imagen Producto" />
          <div className="texto-producto">
            <h3>Producto 4</h3>
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio.
            </p>
            <p className="precio">$500</p>
            <a className="btn" href="#">Agregar al Carrito</a>
          </div>
        </div>

        <div className="producto">
          <img src={producto5} alt="Imagen Producto" />
          <div className="texto-producto">
            <h3>Producto 5</h3>
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio.
            </p>
            <p className="precio">$500</p>
            <a className="btn" href="#">Agregar al Carrito</a>
          </div>
        </div>

        <div className="producto">
          <img src={producto6} alt="Imagen Producto" />
          <div className="texto-producto">
            <h3>Producto 6</h3>
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio.
            </p>
            <p className="precio">$500</p>
            <a className="btn" href="#">Agregar al Carrito</a>
          </div>
        </div>
      </div>
    </main>
   </>
  )
}
