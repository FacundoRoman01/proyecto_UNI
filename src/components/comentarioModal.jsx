import  { useState } from 'react';
import "../style/modalComentario.css";

const ComentarioModal = ({ onClose, onSubmit }) => {
  const [selectedRating, setSelectedRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedRating, comment);
    setSelectedRating(''); // Reset rating
    setComment(''); // Reset comment
    onClose(); // Close modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h2>Calificación a la agencia</h2>
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit}>
          {/* Rating Section */}
          <div className="rating-section">
            <p className="rating-instruction">
              Elegí un ícono acorde a tu experiencia
              <span className="required">*</span>
            </p>
            <div className="rating-options">
              {/* Muy Conforme */}
              <button
                type="button"
                className={`rating-button ${selectedRating === 'muy_conforme' ? 'active' : ''}`}
                onClick={() => setSelectedRating('muy_conforme')}
              >
                <span className="emoji">😊</span>
                <span className="rating-label">Muy conforme</span>
              </button>

              {/* Conforme */}
              <button
                type="button"
                className={`rating-button ${selectedRating === 'conforme' ? 'active' : ''}`}
                onClick={() => setSelectedRating('conforme')}
              >
                <span className="emoji">😐</span>
                <span className="rating-label">Conforme</span>
              </button>

              {/* Disconforme */}
              <button
                type="button"
                className={`rating-button ${selectedRating === 'disconforme' ? 'active' : ''}`}
                onClick={() => setSelectedRating('disconforme')}
              >
                <span className="emoji">😞</span>
                <span className="rating-label">Disconforme</span>
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
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="submit-button"
            disabled={!selectedRating || !comment}
          >
            Enviar calificación
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComentarioModal;
