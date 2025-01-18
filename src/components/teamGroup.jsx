import { useState } from "react";
import PropTypes from "prop-types";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "../style/teamGroup.css";

const TeamGroup = ({ teamMembers }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className="team-container">
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Ocultar miembros" : "Ver miembros"}
      </button>

      {/* Modal */}
      {isVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro de él
          >
            <h2 className="modal-title">Miembros del equipo</h2>
            <div className="modal-team-list">
              {teamMembers.map((member, index) => (
                <div key={index} className="modal-team-member">
                  <div
                    className="modal-avatar"
                    style={{
                      backgroundImage: `url(${member.avatar_indi_group_img})`,
                    }}
                  ></div>
                  <p className="modal-name">{member.name_indi_group}</p>
                  <div className="modal-links">
                    {member.instagram_indi_group && (
                      <a
                        href={member.instagram_indi_group}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram de ${member.name_indi_group}`}
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {member.linkedin_indi_group && (
                      <a
                        href={member.linkedin_indi_group}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${member.name_indi_group}`}
                      >
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

// Validación de las props
TeamGroup.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_indi_group_img: PropTypes.string.isRequired,
      name_indi_group: PropTypes.string.isRequired,
      instagram_indi_group: PropTypes.string,
      linkedin_indi_group: PropTypes.string,
    })
  ).isRequired,
};

export default TeamGroup;
