import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";


const Header = () => {
  const [activeTab, setActiveTab] = useState("Emprendedores");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="header">
      {/* Parte superior del header */}
      <div className="header-top">
        <Link
          to=""
          className={`tab ${activeTab === "Emprendedores" ? "active" : ""}`}
          onClick={() => handleTabChange("Emprendedores")}
        >
          Agencias
        </Link>
        <Link
          title="En desarrollo"
          to=""
          className={`tab ${activeTab === "Grandes agencias" ? "active" : ""}`}
          onClick={() => handleTabChange("Grandes agencias")}
        >
          Grandes agencias
        </Link>
      </div>

      {/* Barra de navegación principal */}
      <nav className="header-nav">
        <div className="logo">
          <Link to="/">
            <p>UNI</p>
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/portfolio">Portfolios</Link>
          </li>
          <li>
            <Link title="En desarrollo">Casos de Estudiantes</Link>
          </li>
          <li>
            <Link title="En desarrollo">Bolsa de Trabajo</Link>
          </li>
        </ul>

        <Link to="/Registro">
          <button className="register-btn">Registrarse</button>
        </Link>
      </nav>


    </header>
  );
};

export default Header;
