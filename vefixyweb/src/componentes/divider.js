import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPoo, FaRocket } from 'react-icons/fa';

const waveAnimation = keyframes`
  0%, 100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const DividerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 6px; /* Ajusta la altura del divisor */
  background: linear-gradient(to right, rgba(45, 55, 72, 0.1), rgba(45, 55, 72, 0.7), rgba(45, 55, 72, 0.1));
  background-size: 200% 100%;
  animation: ${waveAnimation} 2s linear infinite;
  margin: 10px 0; /* Ajusta los márgenes superior e inferior */

  /* Agregamos sombras para simular montañas o círculos */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Icon = styled.div`
  position: absolute;
  color: rgba(45, 55, 72, 0.7); /* Ajusta el color para que coincida con el fondo del divisor */
  width: 70px; /* Ajusta el ancho del POO */
  height: 85px; /* Ajusta la altura del POO */
  z-index: 1; /* Coloca el POO por debajo del divisor */
`;

const Icon2 = styled.div`
  position: absolute;
  top: 0;
  right: 7%; /* Ubica el rocket en el centro horizontal */
  transform: translateX(50%) scaleY(1); /* Centra el rocket y la voltea verticalmente */
  color: rgba(45, 55, 72, 0.7); /* Ajusta el color para que coincida con el fondo del divisor */
  width: 60px; /* Ajusta el ancho del rocket */
  height: 60px; /* Ajusta la altura del rocket */
  z-index: 2; /* Coloca el rocket por encima del divisor */
`;

const PooIcon = styled(Icon)`
  left: 5%; /* Ubica el poo en el centro horizontal */
  transform: translateX(-50%) scaleY(-1); /* Centra el poo y la voltea verticalmente */
`;

const RocketIcon = styled(Icon2)`
margin-top: -70px;
  right: 5%; /* Ubica el poo en el centro horizontal */
  transform: translateX(-50%) scaleY(1); /* Centra el poo y la voltea verticalmente */
`;

const Divider = () => {
  return (
    <DividerContainer>
      <PooIcon as={FaPoo} />
      <RocketIcon as={FaRocket} />
    </DividerContainer>
  );
};

export default Divider;
