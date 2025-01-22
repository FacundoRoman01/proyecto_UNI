import "../style/sidebar.css";
import personasData from "../../data/personas.json"; // Asume que el archivo JSON está en la carpeta 'data'

// Importa Font Awesome
import { FaUsers } from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ onFilterChange }) => {
  // Estado para manejar la visibilidad del sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Obtener las universidades únicas
  const universities = [
    ...new Set(personasData.map((prof) => prof.university)) // Filtrar las universidades únicas
  ];

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      {/* Botón para mostrar/ocultar el sidebar */}
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {showSidebar ? "Ocultar Universidades" : "Mostrar Universidades"}
      </button>

      {/* Sidebar con visibilidad controlada */}
      <aside className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="tabs">
          <h4>Instituciones Educativas</h4>
        </div>

        <div className="companies-list">
          {/* Botón "Todas las Universidades" con un ícono */}
          <div
            className="company-item"
            onClick={() => onFilterChange(null)} // Pasa null para mostrar todas las tarjetas
          >
            <div className="company-info">
              <div className="company-logo">
                <FaUsers size={24} color="#6b7280" /> {/* Icono de universidad */}
              </div>
              <span className="company-name">Todas las Instituciones</span>
            </div>
          </div>

          {/* Mostrar universidades */}
          {universities.map((university) => {
            // Filtrar el logo de la universidad
            const universityData = personasData.find(
              (prof) => prof.university === university
            );
            const universityLogo = universityData
              ? universityData.companyLogo
              : null;

            return (
              <div
                key={university}
                className="company-item"
                onClick={() => onFilterChange(university)} // Llamar a la función onFilterChange al seleccionar una universidad
              >
                <div className="company-info">
                  <div className="company-logo">
                    {/* Mostrar logo de la universidad */}
                    {universityLogo && (
                      <img
                        className="Company_logoTipo"
                        src={universityLogo} // Usar el logo de la universidad correspondiente
                        alt={`${university} logo`}
                        width={40}
                        height={30}
                        loading="lazy" 
                      />
                    )}
                  </div>
                  <span className="company-name">{university}</span>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
