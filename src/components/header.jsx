import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/header.css";

import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Recuperar el nombre del usuario desde localStorage (si está logueado)
  useEffect(() => {
    const user = localStorage.getItem("name");
    console.log('Usuario recuperado desde localStorage:', user); // Verificar si se recupera correctamente
    if (user) {
      setUserName(user);
    }
  }, []);

  // Función de logout que elimina todos los datos y redirige al login
  const handleLogout = () => {
    localStorage.removeItem("name"); // Eliminar el nombre del usuario del localStorage
    localStorage.removeItem("userId"); // Eliminar el id del usuario del localStorage
    localStorage.removeItem("user"); // Eliminar cualquier otro dato relacionado con el usuario
    setUserName(null); // Limpiar el estado de userName
    navigate("/login"); // Redirigir al usuario a la página de login
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

          {/* Mostrar nombre del usuario si está logueado */}
          {userName ? (
            <>
              
              <li><Link to="/perfilUsuario" onClick={() => setIsMenuOpen(false)} className="mi_perfil">Mi Perfil</Link></li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/registro" onClick={() => setIsMenuOpen(false)} className="register-btn">Registro</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

