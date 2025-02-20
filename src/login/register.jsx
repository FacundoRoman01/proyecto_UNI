import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/registro.css";
import useAuth from "../hooks/useAuth.jsx"; // Importamos el hook

const Register = () => {
  const { register, error, loading } = useAuth(); // Usamos el hook
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const success = await register(fullName, email, password, phone);
    if (success) {
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
            <label htmlFor="phone">Número de teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, ""); // Filtra solo números
                setPhone(numericValue);
              }}
              placeholder="Ingresa tu número de teléfono"
              required
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

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Cargando..." : "Registrar"}
          </button>

          {error && <p className="error">{error}</p>} {/* Mostrar error en caso de que ocurra */}

          <div className="form-link">
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
