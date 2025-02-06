// import { useState, useEffect } from "react";
// import ImageCarousel from "../components/imageCarousel";  // Asegúrate de que este componente esté importado correctamente

// const UserImages = ({ persona }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Asegúrate de que persona tenga imágenes antes de asignarlas
//     if (persona && persona.avatar && persona.banner && persona.companyLogo) {
//       // Agregar las imágenes en un arreglo
//       const imageUrls = [
//         persona.avatar,
//         persona.banner,
//         persona.companyLogo
//       ];
//       setImages(imageUrls);
//       setLoading(false);
//     } else {
//       setError("No se encontraron imágenes para este usuario.");
//       setLoading(false);
//     }
//   }, [persona]); // Se ejecuta cada vez que la persona cambia

//   if (loading) {
//     return <p>Cargando imágenes...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       {/* Si hay imágenes, pasa las URLs al carrusel */}
//       {images.length > 0 ? (
//         <ImageCarousel images={images} />
//       ) : (
//         <p>No hay imágenes disponibles.</p> // Mensaje si no hay imágenes
//       )}
//     </div>
//   );
// };

// export default UserImages;
