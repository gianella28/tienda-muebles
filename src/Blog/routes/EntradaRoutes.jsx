import { Route, Routes } from 'react-router-dom'
import { EntradaPage } from '../pages/EntradaPage'


export const EntradaRoutes = () => {
  return (
    <Routes>
       <Route path="/entradaBlog" element={<EntradaPage />} />
       <Route path="/*" element={<EntradaPage />} />
    </Routes>
  )
}

