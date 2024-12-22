import { useState } from "react";
import Sidebar from "../components/sidebar.jsx"; // Sidebar
import Cards from "../components/cards.jsx"; // Cards
import personasData from "../../data/personas.json"; // Datos de personas

const PortfolioPage = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const handleFilterChange = (university) => {
    setSelectedUniversity(university); // Actualiza el estado con la universidad seleccionada
  };

  // Filtrar las personas según la universidad seleccionada
  const filteredPersonas = selectedUniversity
    ? personasData.filter((persona) => persona.university === selectedUniversity)
    : personasData; // Si no hay filtro, muestra todas las personas

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onFilterChange={handleFilterChange} />
      <div style={{ flex: 1, padding: "1rem" }}>
        <h3>
          {selectedUniversity
            ? `Resultados para ${selectedUniversity}`
            : "Todas las Universidades"}
        </h3>
        <Cards limit={filteredPersonas.length} personasData={filteredPersonas} />
      </div>
    </div>
  );
};

export default PortfolioPage;
