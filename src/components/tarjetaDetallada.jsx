import "../style/tarjeta_detallada.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';  // Importar los iconos de react-icons

const TarjetaDetallada = ({ persona }) => {
  const navigate = useNavigate(); // Hook para navegación programática

  // Función para manejar el contacto
  const handleContactClick = (method) => {
    if (method === "email") {
      window.location.href = `mailto:${persona.email}`; // Redirige al email
    } else if (method === "whatsapp") {
      window.location.href = `https://wa.me/${persona.whatsapp}`; // Redirige a WhatsApp
    }
  };

  return (
    <div className="profile-tarjeta">
      {/* Encabezado con logo e información */}
      <div className="profile-header">
        <img
          src={persona.avatar} // Esto asegura que la ruta es correcta desde la raíz
          alt={persona.name}
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

      {/* Botones de contacto con iconos */}
      <div className="contact-buttons">
        <button
          className="contact-button"
          onClick={() => handleContactClick("email")}
        >
          <FaEnvelope /> Email
        </button>
        <button
          className="contact-button"
          onClick={() => handleContactClick("whatsapp")}
        >
          <FaWhatsapp /> WhatsApp
        </button>
      </div>
    </div>
  );
};

export default TarjetaDetallada;
