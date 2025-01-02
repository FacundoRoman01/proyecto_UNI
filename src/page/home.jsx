import Header from "../components/header.jsx";
import Hero from "../components/hero.jsx";
import Cards from "../components/cards.jsx";
import Footer from "../components/footer.jsx";
// import CardAleatorio from "../components/cardAleatorio.jsx";
import HeroAbout from "../components/heroAbout.jsx";
import { Link } from "react-router-dom";
import "../style/home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <CardAleatorio /> */}
      {/* Aquí estamos limitando las tarjetas a 6 */}
      <Cards isHomePage={true} limit={6} />
      <div className="btn-mas-cards">
        <Link to={"/portfolio"} className="btn-link">
          Ver más
        </Link>
      </div>
      <HeroAbout />
      <Footer />
    </div>
  );
};

export default Home;