const Home = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Bienvenido a Three.js Personajes</h1>
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Sobre el Proyecto</h2>
              <p className="card-text">
                Este proyecto es una demostración interactiva de gráficos 3D utilizando Three.js en conjunto con React.
                Explora tres personajes únicos, cada uno con su propia ambientación, música y efectos visuales.
              </p>
              
              <h3 className="mt-4">Tecnologías Utilizadas</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Three.js:</strong> Biblioteca principal para la creación de gráficos 3D en el navegador
                </li>
                <li className="list-group-item">
                  <strong>React Three Fiber:</strong> Renderizador de React para Three.js
                </li>
                <li className="list-group-item">
                  <strong>React Three Drei:</strong> Componentes útiles para React Three Fiber
                </li>
                <li className="list-group-item">
                  <strong>Bootstrap:</strong> Framework CSS para el diseño responsive
                </li>
              </ul>

              <h3 className="mt-4">Características</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Modelos 3D interactivos</li>
                <li className="list-group-item">Iluminación dinámica</li>
                <li className="list-group-item">Efectos de partículas</li>
                <li className="list-group-item">Música ambiental</li>
                <li className="list-group-item">Controles de cámara intuitivos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 