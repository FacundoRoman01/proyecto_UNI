
import { Link } from 'react-router-dom';
import "../style/sidebar.css"; // Importa los estilos del componente

const companies = [
  { name: 'UADE', count: 33, logo: 'src/img/uade.png' },
  { name: 'UP', count: 22, logo: 'src/img/uade.png' },
  { name: 'Da vinci', count: 12, logo: 'src/img/davinci.png' },
  { name: 'Kennedy', count: 11, logo: 'src/img/uade.png' },
  { name: 'UTN', count: 9, logo: 'src/img/davinci.png' },
  { name: 'PALERMO', count: 7, logo: 'src/img/uade.png' },
  { name: 'CODERHOUSE', count: 7, logo: 'src/img/davinci.png' },
  { name: 'SIGLO21', count: 6, logo: 'src/img/uade.png' },
  { name: 'UNIVERSIDAD PINAMAR', count: 5, logo: 'src/img/uade.png' },
  { name: 'UNI', count: 4, logo: 'src/img/davinci.png' },
];

const sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="tabs">
        {/* <Link to="/companies" className="tab active">
          Companies
        </Link>
        <Link to="/colleges" className="tab">
          Colleges
        </Link> */}
        <h4>Universidades</h4>
      </div>

      <div className="companies-list">
        {companies.map((company) => (
          <Link
            to={`/companies/${company.name.toLowerCase()}`}
            key={company.name}
            className="company-item"
          >
            <div className="company-info">
              <div className="company-logo">
                <img
                  className='Company_logoTipo'
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={40}
                  height={30}
                />
              </div>
              <span className="company-name">{company.name}</span>
            </div>
            <span className="company-count">{company.count}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default sidebar;
