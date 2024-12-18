import "../style/footer.css";

const footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>UNI</h2>
            <p>Portfolio inspiration for early career designers</p>
          </div>
  
          <div className="footer-section">
            <h2>Products</h2>
            <nav className="footer-nav">
              <a href="/portfolios">Portfolios</a>
              <a href="/jobs">Jobs</a>
              <a href="/case-studies">Case Studies</a>
              <a href="/premium">Premium</a>
            </nav>
          </div>
        </div>
  
        <div className="footer-logo">UNI</div>
      </footer>
    );
  };

export default footer