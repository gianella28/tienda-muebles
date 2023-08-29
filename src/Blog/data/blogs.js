import { nosotros, producto1} from '../../assets/img';
export const blogs = [
    {
      id:1,
      titulo: "Guía de Colores",
      imagen: nosotros,
      fecha: "26 de agosto del 2023",
      autor: "Tienda muebles",
      contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quis et expedita culpa delectus quidem, dolores accusamus dolorem fugiat vel exercitationem aliquid veritatis ab porro necessitatibus odio quod consequuntur",
      link: "/entradaBlog" // Deja esto como está si es la página de detalles de Guía de Colores.
    },
    {
      id:2,
      titulo: "Guía de Muebles",
      imagen: producto1,
      fecha: "27 de septiembre del 2023",
      autor: "Tienda muebles",
      contenido:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quis et expedita culpa delectus quidem, dolores accusamus dolorem fugiat vel exercitationem aliquid veritatis ab porro necessitatibus odio quod consequuntur",
      link: "/entradaBlog" // Cambia el enlace para que sea único.
    },
    // ... otras entradas de blog ...
  ];
  