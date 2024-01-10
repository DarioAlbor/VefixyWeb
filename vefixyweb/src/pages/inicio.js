// Inicio.js
import { Divider } from '@chakra-ui/react'
import React from 'react';
import Navbar from '../componentes/navbar';
import Hero from '../componentes/hero';
import Divider1 from '../componentes/divider';
import Features from '../componentes/features';
import Statistics from '../componentes/statistics';
import Clientes from '../componentes/clientes';
const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider1 />
      <Statistics />
      <Features />
      <Divider />
      <Clientes />
    </div>
  );
};

export default Inicio;
