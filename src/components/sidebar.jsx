import { useState, useEffect } from "react";
import axios from "axios";
import { FaUsers } from "react-icons/fa";
import "../style/sidebar.css";

const Sidebar = ({ onFilterChange }) => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("http://localhost:8080/proyect_uni/back-end/api/get_universidades_usuarios.php");
        setUniversities(response.data); // Establecer las universidades si la respuesta es exitosa
      } catch (err) {
        console.error("Error al obtener universidades", err);

        // Mostrar el mensaje de error específico
        if (err.response) {
          setError(`Error en el servidor: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          setError("Error al realizar la solicitud: No se pudo contactar con el servidor");
        } else {
          setError("Error desconocido: " + err.message);
        }
      } finally {
        setLoading(false); // Deja de cargar independientemente del resultado
      }
    };

    fetchUniversities();
  }, []);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {showSidebar ? "Ocultar Institutos" : "Mostrar Institutos"}
      </button>

      <aside className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="tabs">
          <h4>Instituciones Educativas</h4>
        </div>

        <div className="companies-list">
          <div className="company-item" onClick={() => onFilterChange(null)}>
            <div className="company-info">
              <div className="company-logo">
                <FaUsers size={24} color="#6b7280" />
              </div>
              <span className="company-name">Todas las Instituciones</span>
            </div>
          </div>

          {loading && <p>Cargando universidades...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && universities.length === 0 && (
            <p>No hay universidades disponibles.</p>
          )}

          {!loading && !error && universities.length > 0 &&
            universities.map((university, index) => (
              <div
                key={index}
                className="company-item"
                onClick={() => onFilterChange(university)} // Aquí pasamos el nombre directamente
              >
                <div className="company-info">
                  <span className="company-name">{university}</span> {/* Mostramos el nombre de la universidad */}
                </div>
              </div>
            ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
