// App.js
import React from 'react';
import './App.css';
import Inicio from './pages/inicio'; // Asegúrate de que la ruta sea correcta
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;
