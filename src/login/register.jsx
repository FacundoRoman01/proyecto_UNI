import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/registro.css";
import useAuth from "../hooks/useAuth"; // Importamos el hook

const Register = () => {
  const { register, error, loading } = useAuth(); // Usamos el hook
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("Freelancer");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(fullName, email, password, accountType); // Llamamos al registro del hook
    if (!loading && !error) {
      navigate("/login"); // Redirigimos al login si el registro fue exitoso
    }
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <h2>Formulario de Registro</h2>
        <form className="formulario" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Ingresa tu nombre completo"
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="accountType">Tipo de cuenta</label>
            <select
              id="accountType"
              name="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            >
              <option value="Freelancer">Freelancer</option>
              <option value="Agency">Agency</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">
            {loading ? "Cargando..." : "Registrar"}
          </button>

          {error && <p className="error">{error.message}</p>} {/* Mostrar error en caso de que ocurra */}

          <div className="form-link">
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
