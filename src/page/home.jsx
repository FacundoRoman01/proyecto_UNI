import Header from "../components/header.jsx";
import Hero from "../components/hero.jsx";
import Cards from "../components/cards.jsx";
// import Tarjeta_detallada from "../components/tarjeta_detallada.jsx";
import Footer from "../components/footer.jsx";
import CardAleatorio from "../components/cardAleatorio.jsx";
const home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <CardAleatorio />
        <Cards isHomePage={true} limit={6} />
        <Footer />

        {/* <Tarjeta_detallada /> */}
        
    </div>
  )
}

export default home