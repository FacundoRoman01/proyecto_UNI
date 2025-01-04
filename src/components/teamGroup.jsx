import PropTypes from "prop-types";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Íconos de Instagram y LinkedIn
import "../style/teamGroup.css";

const TeamGroup = ({ teamMembers }) => {
  return (
    <>
      <h3 className="team-title">Los miembros del proyecto</h3>
      <div className="team-group">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div
              className="team-avatar"
              style={{
                backgroundImage: `url(${member.avatar_indi_group_img})`,
              }}
            ></div>
            <p className="team-name">{member.name_indi_group}</p>
            <div className="team-links">
              {member.instagram_indi_group && (
                <a
                  href={member.instagram_indi_group}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-instagram"
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
                  className="team-linkedin"
                  aria-label={`LinkedIn de ${member.name_indi_group}`}
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Validación de las props
TeamGroup.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_indi_group_img: PropTypes.string.isRequired,
      name_indi_group: PropTypes.string.isRequired,
      instagram_indi_group: PropTypes.string, // Instagram es opcional
      linkedin_indi_group: PropTypes.string, // LinkedIn es opcional
    })
  ).isRequired,
};

export default TeamGroup;
