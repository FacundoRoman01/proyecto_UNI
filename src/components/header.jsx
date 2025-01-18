import { Link } from "react-router-dom";
import  { useState } from "react";
import "../style/header.css";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">GoEstudi</Link>
      </div>
      <button className="header__hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="header__menu">
          <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolios</Link></li>
          <li><Link title="En desarrollo" onClick={() => setIsMenuOpen(false)}>Bolsa de Trabajo</Link></li>
          <li><Link title="En desarrollo" onClick={() => setIsMenuOpen(false)}>Beneficios para Estudiantes</Link></li>
          <li><Link to="/registro" onClick={() => setIsMenuOpen(false)} className="register-btn">Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
