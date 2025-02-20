import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate
import "../style/login.css";
import Header from "../components/header";
import useAuth from "../hooks/useAuth"; // Importamos el hook

const Login = () => {
  const { login, error, loading } = useAuth(); // Usamos el hook para obtener la lógica
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password); // Asegurar que los valores sean correctos
    const result = await login(email, password);
    console.log("¿Login exitoso?", result.success);
  
    if (result.success && result.redirect) {
      console.log("Redirigiendo a:", result.redirect);
  
      // Aquí puedes almacenar el nombre del usuario (o cualquier otro dato relevante) en localStorage
      localStorage.setItem("name", result.userName); // Asegúrate de que `userName` venga del resultado del login
  
      // Redirigir a la ruta que se recibe del backend
      navigate(`/${result.redirect.toLowerCase()}`);
    }
  };
  
  

  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-left">
          <h2>Inicio de Sesión</h2>
          <form className="formulario" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Ingresa tu correo electrónico"
                aria-label="Correo electrónico"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Ingresa tu contraseña"
                aria-label="Contraseña"
              />
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Cargando..." : "Iniciar Sesión"}
            </button>

            {error && <p className="error">{error}</p>} {/* Mostramos el error sin `.message` */}
            <div className="form-link">
              <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
