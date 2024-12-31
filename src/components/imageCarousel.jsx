import { useState } from "react";
import "../style/imageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {/* Slides */}
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
            </div>
          ))}
        </div>

        {/* Botón Anterior */}
        <button
          className="nav-button prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          &#9664;
        </button>

        {/* Botón Siguiente */}
        <button
          className="nav-button next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          &#9654;
        </button>

        {/* Puntos de Navegación */}
        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;