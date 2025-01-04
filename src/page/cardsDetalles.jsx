import { useParams } from "react-router-dom";
import personasData from "../../data/personas.json";  // Ruta correcta a tu archivo de datos
import TarjetaDetallada from "../components/tarjetaDetallada.jsx";
import ImageCarousel from "../components/imageCarousel";
import AboutSection from "../components/aboutCard.jsx";
// import Comments from "../components/comentariosUsuarios.jsx";
import "../style/sectionDetalle.css";
import Header from "../components/header";
import TeamGroup from "../components/teamGroup.jsx";
import Footer from "../components/footer.jsx";
const CardsDetalles = () => {
  const { id } = useParams();  // Obtiene el id de la URL
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
            {/* Primera fila con ProfileCard y Carousel */}
            <div className="profile-card-column">
              <TarjetaDetallada persona={persona} /> {/* Pasa los datos de la persona a ProfileCard */}
              <TeamGroup teamMembers={persona.teamMembers} /> 
            </div>
            <div className="carousel-column">
            <ImageCarousel images={persona.images} />
            <div className="details-column">
            <AboutSection persona={persona} /> {/* Pasa los datos de la persona a AboutSection */}
            {/* <Comments /> */}
          </div>
            </div>
          </div>
          {/* Segunda fila con AboutSection y Comments */}
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardsDetalles;