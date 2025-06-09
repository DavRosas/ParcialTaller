// Componente de pie de página a ancho completo
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '1.5rem',
      width: '100%',
      marginTop: 'auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <div>
          <h5>Three.js Personajes</h5>
          <p>Proyecto creado con React y Three.js</p>
        </div>
        <div>
          <p>© {currentYear} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 