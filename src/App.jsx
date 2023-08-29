import { Footer, NavBar } from './inicio'
import { InicioRoutes } from './router/InicioRoutes'
import './styles.css'

export const App = () =>  {
  return (
    <>
      <NavBar/>
      <InicioRoutes/>
      <Footer/>
    </>
  )
}

export default App;
