import "./ContactoPage.css";

export const ContactoPage = () => {
  return (
    <>
      <main className="contenido-principal contenedor">
          <h2 className="text-center">Contacto</h2>
          <form className="formulario">
            <fieldset>
              <legend>Tus Datos</legend>
              <div className='campo'>
                <label htmlFor="nombre">Nombre: </label>
                <input className="input" id="nombre" type="text" placeholder='Coloca tu nombre' required/>
              </div>
              <div className='campo'>
                <label htmlFor="asunto">Asunto: </label>
                <input id="asunto" type="text" placeholder='Tu asunto'/>
              </div>
              <div className='campo'>
                <label htmlFor="email">E-mail: </label>
                <input id="email" type="email" placeholder='Tu Email'/>
              </div>
              <div className='campo'>
                <label htmlFor="tel">Teléfono: </label>
                <input id="tel" type="tel" placeholder='Tu Teléfono'/>
              </div>
              <div className='campo'>
                <label htmlFor="tel">Mensaje: </label>
                <textarea rows="10" cols="20"></textarea>
              </div>
            </fieldset>

            <fieldset>
              <legend>País</legend>
                <div className='campo'>
                  <label htmlFor="pais">País: </label>
                  <select name="" id="pais">
                    <option value=""> --Seleccione -- </option>
                    <option value="CO"> Colombia </option>
                    <option value="EC"> Ecuador </option>
                    <option value="PE"> Perú </option>
                    <option value="ME"> México </option>
                    <option value="AR"> Argentina </option>
                    <option value="CH"> Chile </option>
                  </select>
                </div>
            </fieldset>


            <fieldset>
              <legend>Información Extra</legend>
                <div className='campo'>
                  <label htmlFor="cliente">Cliente </label>
                  <input id="cliente" type="radio" name='tipo' value="cliente" />
                </div>
                <div className='campo'>
                  <label htmlFor="cliente">Proveedor </label>
                  <input id="proveedor" type="radio" name='tipo' value="proveedor" />
                </div>

                <div className='campo'>
                  <label htmlFor="categoria">Categoría de Interés </label>
                  <input list="categorias"  name="categorias"  />
                  <datalist id="categorias">
                    <option value="Cocina"></option>
                    <option value="Exterior"></option>
                    <option value="Recamaras"></option>
                    <option value="Oficina"></option>
                    <option value="Televisión"></option>
                  </datalist>
                </div>
            </fieldset>
            <input className="btna " type="submit"  value="Enviar Formulario"/>
          
          </form>
         
      </main>
      
    </>
  )
}
