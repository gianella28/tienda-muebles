import { galeria_01, galeria_02,galeria_03,galeria_04,galeria_05,galeria_06,galeria_07, galeria_08, galeria_09} from '../../assets/img';
import "./GaleriaPage.css"
export const GaleriaPage = () => {
  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Galería</h2>
        <ul className="galeria">
          <li>
            <a href={galeria_01} >
              <img src={galeria_01} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_02} >
              <img src={galeria_02} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_03} >
              <img src={galeria_03} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_04} >
              <img src={galeria_04} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_05} >
              <img src={galeria_05} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_06} >
              <img src={galeria_06} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_07} >
              <img src={galeria_07} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_08} >
              <img src={galeria_08} alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href={galeria_09} >
              <img src={galeria_09} alt="imagen galeria" />
            </a>
          </li>
        </ul>

      </main>
    </>
  )
}
