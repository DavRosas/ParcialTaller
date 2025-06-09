import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Character1 from './components/Characters/Character1/Character1';
import Character2 from './components/Characters/Character2/Character2';
import Character3 from './components/Characters/Character3/Character3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personaje1" element={<Character1 />} />
            <Route path="/personaje2" element={<Character2 />} />
            <Route path="/personaje3" element={<Character3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
