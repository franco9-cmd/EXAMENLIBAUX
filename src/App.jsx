import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import hotwheelsList from './data/hotwheels';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import MiColeccion from './components/MiColeccion';
import Categorias from './components/Categorias';

function App() {
  const [showApp, setShowApp] = useState(false);
  const [vehicles, setVehicles] = useState(hotwheelsList);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  function handleToggleObtenido(id) {
    setVehicles(
      vehicles.map(v => v.id === id ? { ...v, obtenido: !v.obtenido } : v)
    );
  }

  function handleToggleFavorito(id) {
    setVehicles(
      vehicles.map(v => v.id === id ? { ...v, favorito: !v.favorito } : v)
    );
  }

  if (!showApp) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main className="container-xl px-3 px-md-4 mb-5">
        <Routes>
          <Route
            path="/"
            element={<Inicio vehicles={vehicles} />}
          />
          <Route
            path="/coleccion"
            element={
              <MiColeccion
                vehicles={vehicles}
                onToggleObtenido={handleToggleObtenido}
                onToggleFavorito={handleToggleFavorito}
              />
            }
          />
          <Route
            path="/categorias"
            element={<Categorias vehicles={vehicles} />}
          />
        </Routes>
      </main>
      <footer className="d-none d-md-block py-4 border-top mt-5 bg-white">
        <div className="container-xl d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <i className="fa-solid fa-car-side text-primary-hw fs-5"></i>
            <span className="fw-bold">Mis Hot Wheels</span>
          </div>
          <div className="text-muted small">
            © 2024 Archivo Hot Wheels. Diseñado para coleccionistas.
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
