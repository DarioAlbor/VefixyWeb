import React, { useEffect } from 'react';
import './App.css';
import Inicio from './pages/inicio';
import Footer from './componentes/footer';
import { useLoading } from './componentes/loading';

function App() {
  const { loading, showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // Simula una carga asincrónica
    showLoading();
    setTimeout(() => {
      // Finaliza la carga después de un tiempo de simulación
      hideLoading();
    }, 3000);
  }, [showLoading, hideLoading]);

  return (
    <div className="App">
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;
