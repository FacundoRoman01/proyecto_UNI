import { Link } from 'react-router-dom'; 
import "../style/registro.css"; 
import Header from '../components/header';

const Registro = () => {
    return (
        <>
        <Header />
        <div className="register-page">
          <div className="content">
            <h1>Regístrate en Uni</h1>
            <p>Conéctate, muestra tu trabajo y crece con nuestra comunidad de diseño.</p>
            <button className="register-button">
              <img src="/google-icon.svg" alt="Google logo" width={20} height={20} />
              Regístrate 
            </button>
            <p className="privacy-policy">
              Al continuar, usted reconoce que ha leído y comprendido, y acepta la{' '}
              <Link to="/privacy">Política de privacidad de Cofolios</Link>.
            </p>
          </div>
          <div className="floating-cards">
            <div className="card card1"></div>
            <div className="card card2"></div>
            <div className="card card3"></div>
            <div className="card card4"></div>
            <div className="card card5"></div>
          </div>
        </div>
        </>
        
      );
}

export default Registro