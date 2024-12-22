import "../style/sidebar.css";
import personasData from "../../data/personas.json"; // Asume que el archivo JSON está en la carpeta 'data'

const Sidebar = ({ onFilterChange }) => {
  // Obtener las universidades únicas
  const universities = [
    ...new Set(personasData.map((prof) => prof.university)) // Filtrar las universidades únicas
  ];

  return (
    <aside className="sidebar">
      <div className="tabs">
        <h4>Universidades</h4>
      </div>

      <div className="companies-list">
        {/* Botón "Todos" para mostrar todas las tarjetas */}
        <div
          className="company-item"
          onClick={() => onFilterChange(null)} // Pasa null para mostrar todas las tarjetas
        >
          <div className="company-info">
            <span className="company-name">Todos</span>
          </div>
        </div>

        {/* Mostrar universidades */}
        {universities.map((university) => (
          <div
            key={university}
            className="company-item"
            onClick={() => onFilterChange(university)} // Llamar a la función onFilterChange al seleccionar una universidad
          >
            <div className="company-info">
              <div className="company-logo">
                {/* Mostrar logo de la universidad */}
                <img
                  className="Company_logoTipo"
                  src={personasData[0].companyLogo} // Usar el logo de la primera universidad (personaliza esto según lo necesites)
                  alt={`${university} logo`}
                  width={40}
                  height={30}
                />
              </div>
              <span className="company-name">{university}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
