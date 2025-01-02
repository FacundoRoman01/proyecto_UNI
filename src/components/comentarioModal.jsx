import { useState } from "react";
import "../style/modalComentario.css";

const ComentarioModal = ({ onClose, onSubmit }) => {
  const [selectedRating, setSelectedRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedRating, comment);
    setSelectedRating(""); // Reset rating
    setComment(""); // Reset comment
    onClose(); // Close modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h2>Apoyo al proyecto</h2>
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit}>
          {/* Rating Section */}
          <div className="rating-section">
            <p className="rating-instruction">
              ¿Cómo describirías tu experiencia? 
              <span className="required">*</span>
            </p>
            <div className="rating-options">
              {/* Excelente */}
              <button
                type="button"
                className={`rating-button ${selectedRating === "excelente" ? "active" : ""}`}
                onClick={() => setSelectedRating("excelente")}
              >
                <span className="emoji">🌟</span>
                <span className="rating-label">Excelente</span>
              </button>

              {/* Muy bueno */}
              <button
                type="button"
                className={`rating-button ${selectedRating === "muy_bueno" ? "active" : ""}`}
                onClick={() => setSelectedRating("muy_bueno")}
              >
                <span className="emoji">😊</span>
                <span className="rating-label">Muy bueno</span>
              </button>

              {/* Bueno */}
              <button
                type="button"
                className={`rating-button ${selectedRating === "bueno" ? "active" : ""}`}
                onClick={() => setSelectedRating("bueno")}
              >
                <span className="emoji">👍</span>
                <span className="rating-label">Bueno</span>
              </button>
            </div>
          </div>

          {/* Comment Section */}
          <div className="comment-section">
            <label htmlFor="comment">
              Comentario<span className="required">*</span>
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows={4}
              placeholder="Escribe un mensaje de apoyo..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
            disabled={!selectedRating || !comment}
          >
            Enviar apoyo
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComentarioModal;