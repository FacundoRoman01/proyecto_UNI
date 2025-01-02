import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import personasData from "../../data/personas.json"; // Cargar los datos de las personas
import "../style/card.css";

const Cards = ({ universidad, limit = 0 }) => {  // Establece el valor predeterminado aquí
  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Filtrar las personas según la universidad, si no hay filtro, mostrar todas
    const filteredPersonas = universidad
      ? personasData.filter((persona) => persona.university === universidad)
      : personasData;

    setPersonas(filteredPersonas);
  }, [universidad]);

  const handleClick = (personaId) => {
    navigate(`/detalle/${personaId}`);
  };

  // Aplicar límite solo si se proporciona y es mayor que 0
  const personasAMostrar = limit > 0 ? personas.slice(0, limit) : personas;

  return (
    <div className="container">
      <div className="row g-0">
        {personasAMostrar.map((persona) => (
          <div key={persona.id} className="col-md-4 mb-4">
            <div
              className="profile-card"
              onClick={() => handleClick(persona.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="banner">
                <div className="banner-content">
                  <img src={persona.banner} alt="Banner" />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-avatar">
                  <img src={persona.avatar} alt="Avatar" className="avatar" />
                </div>
                <div className="profile-details">
                  <h2>{persona.name}</h2>
                  <p>{persona.university}</p>
                </div>
                <div className="empresa-logo">
                  <img
                    src={persona.companyLogo}
                    alt="Company Logo"
                    className="empresa-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Validación de las propiedades usando PropTypes
Cards.propTypes = {
  universidad: PropTypes.string, // Universidad para filtrar
  limit: PropTypes.number, // Límite de tarjetas a mostrar
};

export default Cards;