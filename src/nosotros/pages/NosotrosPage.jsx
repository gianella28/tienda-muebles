import './NosotrosPage.css'
import { nosotros } from '../../assets/img';

export const NosotrosPage = () => {
  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Sobre Nosotros</h2>
        <div className="contenido-nosotros">
          <div className='imagen'>
            <img src={nosotros} alt="imagen nosotros"/>
          </div>
          <div className='informacion-nosotros'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum, sunt saepe maxime voluptate dignissimos reiciendis incidunt tempore quos id soluta facere dolorem iure repellat.
              Alias iusto quae velit accusantium rem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum, sunt saepe maxime voluptate dignissimos reiciendis incidunt tempore quos id soluta facere dolorem iure repellat.
              Alias iusto quae velit accusantium rem.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

