
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <header>
        <h1 className="nombre-sitio">Tienda <span>Muebles</span></h1>
      </header>
      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <NavLink  to="/">Inicio</NavLink> {/* Utiliza Link para la navegación */}
          <NavLink  to="/nosotros">Nosotros</NavLink> {/* Ruta a la página "Nosotros" */}
          <NavLink  to="/tienda">Tienda</NavLink>
          <NavLink  to="/blog">Blog</NavLink>
          <NavLink  to="/galeria">Galeria</NavLink>
          <NavLink  to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </>
     )
}
