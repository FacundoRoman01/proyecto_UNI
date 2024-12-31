import "../style/footer.css";

const footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>MOSTRALÓ</h2>
            <p>Inspiración de portafolios de estudiantes que inician su carrera</p>
          </div>
  
          <div className="footer-section">
            <h2>Products</h2>
            <nav className="footer-nav">
              <a href="/portfolio">Portfolios</a>
              <a href="#">Trabajo</a>
              <a href="#">Caso de estudiantes</a>
              {/* <a href="/premium">Premium</a> */}
            </nav>
          </div>
        </div>
  
        <div className="footer-logo">MOSTRALÓ</div>
      </footer>
    );
  };

export default footer