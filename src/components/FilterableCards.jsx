// import { useState } from "react";
// import Sidebar from "../components/sidebar.jsx"; // Importa el sidebar
// import Cards from "../components/cards.jsx"; // Importa las cards
// import personasData from "../../data/personas.json"; // Datos de personas

// const FilterableCards = () => {
//   const [selectedUniversity, setSelectedUniversity] = useState("");

//   const handleFilterChange = (university) => {
//     setSelectedUniversity(university);
//   };

//   const filteredPersonas = selectedUniversity
//     ? personasData.filter((persona) => persona.university === selectedUniversity)
//     : personasData;

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar onFilterChange={handleFilterChange} />
//       <div style={{ flex: 1, padding: "1rem" }}>
//         <h3>
//           {selectedUniversity
//             ? `Resultados para ${selectedUniversity}`
//             : "Todas las Universidades"}
//         </h3>
//         <Cards limit={filteredPersonas.length} personasData={filteredPersonas} />
//       </div>
//     </div>
//   );
// };

// export default FilterableCards;
