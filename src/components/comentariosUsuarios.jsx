import { useState } from "react";
import "../style/comentariosUsuarios.css";
import ModalComentario from "../components/comentarioModal.jsx"; // Importa el modal

const ComentariosUsuarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar el modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitRating = (rating, comment) => {
    console.log("Calificación:", rating);
    console.log("Comentario:", comment);
    setIsModalOpen(false); // Cierra el modal al enviar la calificación
  };

  return (
    <section className="comments-section">
      {/* Encabezado de comentarios */}
      <div className="comments-header">
        <h2>Comentarios de clientes</h2>
        <button className="rate-button" onClick={handleOpenModal}>
          Calificar especialista
        </button>
      </div>

      {/* Comentario individual */}
      <div className="comment">
        <div className="comment-header">
          <div className="user">
            <div className="user-avatar">P</div>
            <span className="user-name">Pol</span>
          </div>
          <span className="comment-date">30/10/2024</span>
        </div>
        <p className="comment-text">Muy buen trabajo</p>
      </div>

      {/* Modal para calificar */}
      {isModalOpen && (
        <ModalComentario onClose={handleCloseModal} onSubmit={handleSubmitRating} />
      )}
    </section>
  );
};

export default ComentariosUsuarios;
