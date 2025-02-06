import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";  
import "../style/card.css";

const Cards = ({ universidad, limit = 0 }) => { 
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState(null);  // Estado de error
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/proyect_uni/back-end/api/api.php") 
      .then((response) => {
        const filteredPersonas = universidad
          ? response.data.filter((persona) => persona.university === universidad)
          : response.data;
        setPersonas(filteredPersonas);
        setLoading(false);  // Deja de cargar
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
        setError("Hubo un problema al cargar los datos.");
        setLoading(false);  // Deja de cargar aunque haya error
      });
  }, [universidad]);

  const handleClick = (personaId) => {
    navigate(`/detalle/${personaId}`);
  };

  const personasAMostrar = limit > 0 ? personas.slice(0, limit) : personas;

  if (loading) {
    return <div>Cargando...</div>;  // Mostrar mientras se carga
  }

  if (error) {
    return <div className="error-message">{error}</div>;  // Mostrar mensaje de error
  }

  return (
    <div className="container">
      <div className="row g-0">
        {personasAMostrar.map((persona) => (
          <div key={persona.id} className="col-md-4 mb-4 cards_center">
            <div className="profile-card" onClick={() => handleClick(persona.id)}>
              <div className="banner">
                <div className="banner-content">
                  <img src={persona.banner} alt="Banner" loading="lazy" />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-avatar">
                  <img src={persona.avatar} alt="Avatar" className="avatar" loading="lazy" />
                </div>
                <div className="profile-details">
                  <h2>{persona.name}</h2>
                  <p>{persona.university}</p>
                </div>
                <div className="empresa-logo">
                  <img src={persona.companyLogo} alt="Company Logo" className="empresa-icon" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  universidad: PropTypes.string, 
  limit: PropTypes.number, 
};

export default Cards;
