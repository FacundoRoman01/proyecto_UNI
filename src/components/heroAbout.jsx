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
                    ¡Bienvenido a una comunidad de estudiantes apasionados por la innovación y el cambio!
                    Aquí podrás <strong>publicar tus proyectos</strong>, dar a conocer tus ideas y conectar con otros estudiantes, docentes y profesionales que comparten tus intereses.
                    La plataforma está diseñada para ayudarte a <strong>potenciar tus proyectos</strong>,
                    colaborar con otros y <strong>hacerte ver</strong> en el mundo académico y profesional. ¡Es tu oportunidad para transformar tus ideas en realidades!
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
