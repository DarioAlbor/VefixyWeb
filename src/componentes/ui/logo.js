import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import './css/logo.css'; // Importa el archivo CSS para estilos

const Logo = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      className={`logo-container ${isHovered ? '' : 'expanded'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="http://vefixy.com" target="_blank" rel="noopener noreferrer">
        <img src="http://localhost:3000/imagenes/logo.png" alt="Logo" />
        <Text className="text">
          <span className="vef">Vef</span>
          <span className="ixy">ixy</span> Network
        </Text>
      </a>
    </Box>
  );
};

export default Logo;
