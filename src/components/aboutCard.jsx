import "../style/aboutCard.css";
import TeamGroup from "../components/teamGroup.jsx";

const AboutCard = ({ persona }) => {
  return (
    <section className="about-section">
      <h2>Sobre {persona.name}</h2> {/* Nombre dinámico */}
      <p>{persona.about}</p> {/* Descripción dinámica */}

      {/* Mostrar TeamGroup solo si hay miembros del equipo */}
      {persona.teamMembers && persona.teamMembers.length > 0 && (
        <TeamGroup teamMembers={persona.teamMembers} />
      )}
    </section>
  );
};

export default AboutCard;
