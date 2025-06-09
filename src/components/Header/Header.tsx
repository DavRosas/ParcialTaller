import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Three.js Personajes</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/personaje1">Personaje 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/personaje2">Personaje 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/personaje3">Personaje 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header; 