import { Link } from 'react-router-dom';

// Navegación simple a ancho completo
const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#333', 
      padding: '1rem',
      color: 'white',
      width: '100%'
    }}>
      <div style={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Three.js Personajes
        </Link>
        <nav>
          <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/personaje1" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Personaje 1</Link>
          <Link to="/personaje2" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Personaje 2</Link>
          <Link to="/personaje3" style={{ color: 'white', textDecoration: 'none' }}>Personaje 3</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 