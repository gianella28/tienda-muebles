import {InicioPages} from '../inicio'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NosotrosPage } from '../nosotros'
import { TiendaPages } from '../tienda'
import { BlogPage } from '../Blog/pages/BlogPage'
import { GaleriaPage } from '../galeria/pages/GaleriaPage'
import { ContactoPage } from '../contacto/pages/ContactoPage'
import { EntradaRoutes } from '../Blog/routes/EntradaRoutes'


export const InicioRoutes = () => {
  return (
    <>
        <div className='container'>
            <Routes>
                <Route path="/inicio" element={ <InicioPages /> } />
                <Route path="/nosotros" element={ <NosotrosPage /> } />
                <Route path="/tienda" element={ <TiendaPages /> } />
                <Route path="/blog" element={ <BlogPage /> } />
                <Route path="/galeria" element={ <GaleriaPage/> } />
                <Route path="/contacto" element={ <ContactoPage/> } />
                <Route path="/entradaBlog/*" element={<EntradaRoutes />} />
            
                <Route path="/" element={ <Navigate to="/inicio" /> } />
            </Routes>
        </div>
      

    </>
  )
}
