import Cards from "../components/cards.jsx";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer.jsx";
import "../style/portfolios.css"; 

const Portfolios = () => {
  return (
    <>
      <Header />
      
      <section className="section-portfolio">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-12 p-0">
              <Sidebar />
            </div>

            {/* Cards */}
            <div className="col-md-9 col-12 section-card">
              <Cards />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolios;
