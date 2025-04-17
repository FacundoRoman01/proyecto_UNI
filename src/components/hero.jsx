// import { useState } from "react";


// const categories = [
//   "Todos",
//   "Diseño de interiores",
//   "Diseño",
//   "Marketing Online",
//   "Fotografía",
//   "Desarrollo",
// ];
// import "../style/hero.css"

// const hero = () =>  {
//   const [activeCategory, setActiveCategory] = useState("Todos");

//   return (
//     <section className="specialists-header">
//       <div className="container">
//         <div className="categories">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`category-btn ${
//                 activeCategory === category ? "active" : ""
//               }`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <h1 className="title">Portfolios y Branding de Estudiantes</h1>

//         <div className="subtitle">
//           <span>Explora y comparte los proyectos creados por estudiantes de diversas instituciones.</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default hero

import "../style/hero.css"
import heroPrueba from "../../public/assets/img/banners/banner_prueba.jpg";
import heroPrueba2 from "../../public/assets/img/banners/banner1.jpg";
import heroPrueba3 from "../../public/assets/img/banners/banner2.jpg";
import heroPrueba4 from "../../public/assets/img/banners/banner3.jpg";
import heroPrueba5 from "../../public/assets/img/banners/banner5.jpg";
import heroPrueba6 from "../../public/assets/img/images_presentacion/banner6.jpg";

const hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Portfolios y Branding de Estudiantes</h1>
        <p>
        <span>Explora y comparte los proyectos creados por estudiantes de diversas instituciones.</span>
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Subir Proyecto</button>
          {/* <button className="btn-secondary">Check live preview</button> */}
        </div>
      </div>

      {/* Imágenes flotantes */}
      <img src={heroPrueba} alt="Card 1" className="floating-img img1" />
      <img src={heroPrueba2} alt="Card 2" className="floating-img img2" />
      <img src={heroPrueba3} alt="Card 3" className="floating-img img3" />
      <img src={heroPrueba4} alt="Card 4" className="floating-img img4" />
      <img src={heroPrueba5} alt="Card 5" className="floating-img img5" />
      <img src={heroPrueba6} alt="Card 5" className="floating-img img6" />
    </section>
  );
};

export default hero;
