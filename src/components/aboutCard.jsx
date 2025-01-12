import "../style/aboutCard.css";

const AboutCard = ({ persona }) => {
  return (
    <section className="about-section">
      <h2>Sobre {persona.nombreCompleto}</h2> {/* Nombre dinámico */}
      <p>{persona.about}</p> {/* Descripción dinámica */}
    </section>
  );
};

export default AboutCard;
