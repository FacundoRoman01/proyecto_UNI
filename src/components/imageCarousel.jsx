import { useState } from "react";
import "../style/imageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
                onClick={() => openModal(index)}
                loading="lazy"  // Abrir modal con la imagen seleccionada
              />
            </div>
          ))}
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
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
