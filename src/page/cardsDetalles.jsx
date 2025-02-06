import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TarjetaDetallada from "../components/tarjetaDetallada.jsx";
import AboutSection from "../components/aboutCard.jsx";
import ImageCarousel from "../components/imageCarousel.jsx"; // Importa el componente ImageCarousel
import "../style/sectionDetalle.css";
import Header from "../components/header";
import Footer from "../components/footer.jsx";

const CardsDetalles = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const [persona, setPersona] = useState(null); // Estado para guardar la persona
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener los datos del usuario
    const fetchPersona = async () => {
      try {
        // Realiza la solicitud a la API de PHP con el ID
        const response = await axios.get(`http://localhost:8080/proyect_uni/back-end/api/user.php?id=${id}`);
        console.log(response.data); // Verifica la respuesta de la API en la consola
        setPersona(response.data); // Almacena los datos de la persona
        setLoading(false); // Cambia el estado de loading a false
      } catch (err) {
        console.error("Error al cargar los datos", err);
        setError("Error al cargar los datos.");
        setLoading(false); // Cambia el estado de loading a false
      }
    };

    fetchPersona(); // Llamar a la función cuando el componente se monte
  }, [id]); // Solo vuelve a ejecutarse si cambia el id en la URL

  if (loading) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga
  }

  if (error) {
    return <p>{error}</p>; // Muestra un mensaje de error
  }

  if (!persona) {
    return <p>Persona no encontrada.</p>; // Si no encuentra la persona, muestra un mensaje
  }

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="content-wrapper">
          <div className="grid">
            {/* Primera fila con ProfileCard y el carrusel */}
            <div className="profile-card-column">
              <TarjetaDetallada persona={persona} /> {/* Pasa los datos de la persona */}
            </div>
            <div className="carousel-column">
              {/* Aquí se pasa el array de imágenes al componente ImageCarousel */}
              {persona.images && persona.images.length > 0 && (
    <div className="carousel-container">
        <ImageCarousel userId={persona.id} />
    </div>
)}
              {/* {persona.avatar && (
                <div className="avatar-container">
                  <img
                    src={persona.avatar}
                    alt={persona.name}
                    className="avatar-image"
                  />
                </div>
              )} */}
              <div className="details-column">
                <AboutSection persona={persona} /> {/* Pasa los datos de la persona */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardsDetalles;
