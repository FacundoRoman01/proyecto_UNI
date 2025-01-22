import { useParams } from "react-router-dom";
import personasData from "../../data/personas.json"; // Ruta correcta a tu archivo de datos
import TarjetaDetallada from "../components/tarjetaDetallada.jsx";
import AboutSection from "../components/aboutCard.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx"; // Importa tu carrusel
import "../style/sectionDetalle.css";
import Header from "../components/header";
import Footer from "../components/footer.jsx";

const CardsDetalles = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const persona = personasData.find((persona) => persona.id === parseInt(id)); // Busca los datos según el id

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
              {/* Carrusel de imágenes */}
              {persona.images && persona.images.length > 0 ? (
                persona.images.length > 1 ? (
                  <ImageCarousel images={persona.images} />
                ) : (
                  <div className="single-image-container">
                    <img
                      src={persona.images[0]}
                      alt={persona.name}
                      className="main-image"
                    />
                  </div>
                )
              ) : (
                <p>No hay imágenes disponibles.</p>
              )}
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
