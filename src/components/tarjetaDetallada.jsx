import "../style/tarjeta_detallada.css";
import { Link, useNavigate } from "react-router-dom";

const TarjetaDetallada = ({ persona }) => {
  const navigate = useNavigate(); // Hook para navegación programática

  const handleContactClick = () => {
    // Redirigir a una página de detalles con el ID
    navigate(`/detalle/${persona.id}`);
  };

  return (
    <div className="profile-tarjeta">
      {/* Encabezado con logo e información */}
      <div className="profile-header">
        <img
          src={persona.avatar} 
          alt={`${persona.name} avatar`}
          className="company-logo"
        />
        <h1 className="company-title">{persona.name} - {persona.university}</h1>
      </div>

      {/* Navegación con Link */}
      <Link to={`/detalle/${persona.id}`} className="website-link">
        🌐 Visita nuestra web
      </Link>

      {/* Servicios */}
      <div className="services-section">
        <h2>Servicios ofrecidos:</h2>
        <div className="service-tags">
          {persona.services.map((servicio, index) => (
            <span key={index} className="tag">
              {servicio}
            </span>
          ))}
        </div>
      </div>

      {/* Botón para redirigir */}
      <button className="contact-button" onClick={handleContactClick}>
        Contactar
      </button>
    </div>
  );
};

export default TarjetaDetallada;
