// Inicio.js
import React from 'react';
import Navbar from '../componentes/navbar';
import Hero from '../componentes/hero';
import Divider from '../componentes/divider';
import Features from '../componentes/features';
import Statistics from '../componentes/statistics';

const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider />
      <Statistics />
      <Features />
    </div>
  );
};

export default Inicio;
