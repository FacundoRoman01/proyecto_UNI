import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
import Header from "../components/header";
import useAuth from "../hooks/useAuth"; // Importamos el hook

const Login = () => {
  const { login, error, loading } = useAuth(); // Usamos el hook para obtener la lógica
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password); // Llamamos al login del hook
    if (!loading && !error) {
      navigate("/dashboard"); // Redirigimos al dashboard si el login fue exitoso
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
              {loading ? "Cargando..." : "Iniciar Sesión"}
            </button>

            {error && <p className="error">{error.message}</p>} {/* Mostrar error en caso de que ocurra */}
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
