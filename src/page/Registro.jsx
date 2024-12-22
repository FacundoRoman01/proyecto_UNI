// import { Link } from 'react-router-dom'; 

 import Header from '../components/header';
// import registro_foto from "../img/registro_foto.png";
import "../style/registro.css"; 

const Registro = () => {
  
  return (
   <>
   <Header />
    <div className="form-container">
      <div className="form-left">
        <h2>Formulario de Registro</h2>
        <form  className="formulario">
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value=""
              onChange=""
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
              value=""
              onChange=""
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
              value=""
              onChange=""
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountType">Tipo de cuenta</label>
            <select
              id="accountType"
              name="accountType"
              value=""
              onChange=""
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
   </>
  );
};

export default Registro