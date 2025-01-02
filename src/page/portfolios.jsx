import Cards from "../components/cards.jsx";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import personasData from "../../data/personas.json"; // Importamos aquí el JSON para contar las tarjetas disponibles
import "../style/portfolios.css";

const Portfolios = () => {
  const { universidad } = useParams();
  const [filteredUniversidad, setFilteredUniversidad] = useState(null);
  const [limit, setLimit] = useState(10); // Límite inicial de 10 tarjetas
  const [hasMore, setHasMore] = useState(true); // Estado para el botón "Ver más"

  useEffect(() => {
    setFilteredUniversidad(universidad || null);
    setLimit(10); // Reiniciar el límite a 10 si cambia la universidad
  }, [universidad]);

  const handleVerMas = () => {
    const totalPersonas = filteredUniversidad
      ? personasData.filter((persona) => persona.university === filteredUniversidad).length
      : personasData.length;

    if (limit + 10 >= totalPersonas) {
      setLimit(totalPersonas); // Mostrar todas las tarjetas restantes
      setHasMore(false); // Ocultar el botón "Ver más"
    } else {
      setLimit(limit + 10); // Incrementar el límite en 10 tarjetas
    }
  };

  return (
    <>
      <Header />
      <section className="section-portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-12 p-0">
              <Sidebar onFilterChange={setFilteredUniversidad} />
            </div>
            <div className="col-md-9 col-12 section-card">
              <Cards universidad={filteredUniversidad} limit={limit} />
              {hasMore && (
                <div className="button-container">
                  <button className="ver-mas-btn" onClick={handleVerMas}>
                    Ver más
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolios;
