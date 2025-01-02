import { useState } from "react";
import { Link } from "react-router-dom"; // Para la navegación
import "../style/login.css"; // Asegúrate de tener este archivo de estilos
import Header from "../components/header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", { email, password });
    // Aquí podrías manejar la lógica de autenticación
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
            />
          </div>

          <button type="submit" className="btn-submit">
            Iniciar Sesión
          </button>

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
