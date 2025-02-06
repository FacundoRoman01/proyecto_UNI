import { useState, useEffect } from "react";
import axios from "axios";
import "../style/imageCarousel.css";

const ImageCarousel = ({ userId }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);  // Agregado estado de carga
  const [error, setError] = useState(null);  // Agregado estado de error
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("User ID recibido en ImageCarousel:", userId);

        const response = await axios.get(
          `http://localhost:8080/proyect_uni/back-end/api/user.php?id=${userId}`
        );

        console.log("Datos recibidos:", response.data);

        if (response.data && response.data.images) {
          setImages(response.data.images);
        } else {
          console.log("No se encontraron imágenes para este usuario.");
          setImages([]);  // Asegura que 'images' esté vacío si no hay imágenes
        }
      } catch (error) {
        console.error("Error cargando imágenes:", error);
        setError("Error al cargar las imágenes.");
      } finally {
        setLoading(false);  // Marca la carga como completada
      }
    };

    if (userId) {
      fetchUserData();
    } else {
      console.warn("userId es inválido:", userId);
      setError("userId no válido.");
      setLoading(false);
    }
  }, [userId]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Cargando imágenes...</p>; // Mostrar un mensaje de carga
  }

  if (error) {
    return <p>{error}</p>; // Si hay error, mostrarlo
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <div className="slide" key={index}>
                <img
                  src={`/${image}`}
                  alt={`Imagen ${index}`}
                  className="slide-image"
                  onClick={() => openModal(index)} // Abrir modal al hacer clic
                  loading="lazy"
                />
              </div>
            ))
          ) : (
            <p>No hay imágenes disponibles.</p>
          )}
        </div>
        <button className="nav-button prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="nav-button next" onClick={handleNext}>
          ❯
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <img
            src={`/${images[currentIndex]}`}
            alt={`Imagen ${currentIndex}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
