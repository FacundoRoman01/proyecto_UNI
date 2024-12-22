import './App.css'
import Home from "./page/home.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './page/Registro.jsx';
import Portfolio from './page/portfolios.jsx'; // Tu página de portfolios
import CardsDetalles from './page/cardsDetalles.jsx';
import ScrollToTop from './components/useScrollToTop.jsx';
import PortfolioPage from './components/PortfolioPage';

function App() {
  return (
    <>
      <Router> 
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolios/:university" element={<PortfolioPage />} />{/* Ruta con parámetro universidad */}
          <Route path="/Registro" element={<Registro />} />
          <Route path="/detalle/:id" element={<CardsDetalles />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
