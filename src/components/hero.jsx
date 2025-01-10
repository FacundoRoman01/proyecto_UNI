// import { useState } from "react";


// const categories = [
//   "Todos",
//   "Diseño de interiores",
//   "Diseño",
//   "Marketing Online",
//   "Fotografía",
//   "Desarrollo",
// ];
import "../style/hero.css"

const hero = () =>  {
  // const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <section className="specialists-header">
      <div className="container">
        {/* <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div> */}

        <h1 className="title">Portfolios y Agencias Universitarias</h1>

        <div className="subtitle">
          <span>Comparte y destacá los proyectos que impulsás desde tu facultad.</span>
        </div>
      </div>
    </section>
  );
};

export default hero