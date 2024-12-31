import  { useState } from "react";
import "../style/registro.css"; 

const Register = () => {
  // Estado para los campos del formulario
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("Freelancer");

  return (
    <div className="form-container">
      <div className="form-left">
        <h2>Formulario de Registro</h2>
        <form className="formulario">
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
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
