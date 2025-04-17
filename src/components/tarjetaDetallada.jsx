import "../style/tarjeta_detallada.css";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';  // Importar los iconos de react-icons
// import fotoprueba from "../../public/assets/img/avatar1.png";

const TarjetaDetallada = ({ persona }) => {
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
        {/* <img
          src={persona.avatar}// Esto asegura que la ruta es correcta desde la raíz
          alt={persona.name}
          className="avatar_tarjetaDetallada"
          loading="lazy" 
        /> */}
        <h1 className="company-title">{persona.name} - {persona.university}</h1>
      </div>

      {/* Navegación con Link */}
      <div className="website-link">
        <a href={persona.url_paginas} target="_blank" rel="noopener noreferrer">
          Visita la página
        </a>
      </div>

      {/* Servicios */}
      <div className="services-section">
        <h2>Habilidades del estudiante:</h2>
        <div className="service-tags">
          {/* Verificación si persona.services es un array antes de hacer .map() */}
          {Array.isArray(persona.services) && persona.services.length > 0 ? (
            persona.services.map((servicio, index) => (
              <span key={index} className="tag">
                {servicio}
              </span>
            ))
          ) : (
            <p>No hay Habilidades disponibles</p> // Mensaje en caso de no tener servicios
          )}
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
