// // Componente Cards en Home
// import { useState } from "react";
// import Card from "../components/card.jsx"
// const CardsHome = () => {
//     const [personas, setPersonas] = useState([]);
  
//     useEffect(() => {
//       setPersonas(personasData);
//     }, []);
  
//     // Limita las cartas a solo las 4 primeras
//     const personasLimitadas = personas.slice(0, 4);
  
//     return (
//       <div className="container">
//         <div className="row">
//           {personasLimitadas.map((persona) => (
//             <div key={persona.id} className="col-md-4 mb-4">
//               <Card persona={persona} />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default CardsHome;
  