import Cards from "../components/cards.jsx";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer.jsx";
import { useParams } from "react-router-dom"; // Asegúrate de importar useParams
import { useState, useEffect } from "react";
import "../style/portfolios.css"; 

const Portfolios = () => {
  const { universidad } = useParams();
  const [filteredUniversidad, setFilteredUniversidad] = useState(null);

  useEffect(() => {
    setFilteredUniversidad(universidad || null);
  }, [universidad]);

  return (
    <>
      <Header />
      <section className="section-portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-12 p-0">
              <Sidebar onFilterChange={setFilteredUniversidad} />
            </div>
            <div className="col-md-9 col-12 section-card">
              <Cards universidad={filteredUniversidad} limit={null} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolios;
