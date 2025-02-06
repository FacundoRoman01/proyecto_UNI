import "../style/heroAbout.css";
import heroAboutImg from "../../public/assets/img/registro_foto.png";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const HeroAbout = () => {
    return (
        <section className="heroContainer">
            <div className="contentSide">
                <h1 className="title">
                    Comparte tus Proyectos:
                </h1>
                <p className="description">
                    Bienvenido a una comunidad creada para estudiantes como tú. Aquí puedes mostrar tu talento y creatividad a través de portfolios de desarrollo, diseño UX/UI, branding, ilustración y mucho más.

                    Publica tus proyectos, conecta con otros profesionales en formación y haz que tu trabajo se destaque en el mundo académico y profesional.


                </p>
                {/* Envuelve el botón con Link para permitir la navegación */}
                <Link to="/Registro">
                    <button className="button">
                        Publica tu Proyecto
                    </button>
                </Link>
            </div>
            <div className="imageSide">
                <img
                    src={heroAboutImg}
                    alt="Imagen representativa de proyectos universitarios colaborativos"
                    className="image"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default HeroAbout;
