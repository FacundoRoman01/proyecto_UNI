import "../style/heroAbout.css";
import heroAboutImg from "../img/registro_foto.png";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const HeroAbout = () => {
    return (
        <section className="heroContainer">
            <div className="contentSide">
                <h1 className="title">
                    Agencias Universitarias: Comparte tus Proyectos
                </h1>
                <p className="description">
                    ¡Bienvenido a una comunidad de estudiantes.
                    La plataforma está diseñada para ayudarte a <strong>potenciar tus proyectos</strong>,
                    <strong> hacerte ver</strong> en el mundo académico y profesional. ¡Es tu oportunidad para mostrar tus ideas en realidades!
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
                />
            </div>
        </section>
    );
};

export default HeroAbout;
