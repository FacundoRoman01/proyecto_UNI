import "../style/card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import personasData from "../../data/personas.json";
import PropTypes from "prop-types";

const Cards = ({ limit = personasData.length, isHomePage = false }) => {
  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let personasToDisplay = personasData;

    // Si estamos en la página de inicio, mezclamos las tarjetas
    if (isHomePage) {
      personasToDisplay = [...personasData].sort(() => Math.random() - 0.5);
    }

    setPersonas(personasToDisplay);
  }, [isHomePage]);

  const handleClick = (personaId) => {
    navigate(`/detalle/${personaId}`);
  };

  // Limitar la cantidad de personas a mostrar según el valor de "limit"
  const personasLimitadas = personas.slice(0, limit);

  return (
    <div className="container">
      <div className="row">
        {personasLimitadas.map((persona) => (
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
  limit: PropTypes.number, // Se acepta un valor opcional que limita la cantidad de tarjetas mostradas
  isHomePage: PropTypes.bool, // Se pasa como propiedad para determinar si se debe aleatorizar
};

export default Cards;
