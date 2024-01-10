import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Box, Image } from '@chakra-ui/react';

// Importar estilos adicionales de Swiper
import 'swiper/components/navigation/navigation.min.css';

// Importar Swiper core y módulos de navegación y paginación
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

// Instalar módulos de Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Clientes = () => {
  const clientes = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <Box mt="4" mb="8">
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        {clientes.map((cliente) => (
          <SwiperSlide key={cliente}>
            <Image
              src={`http://localhost:3000/imagenes/clientes/cliente${cliente}.jpg`}
              alt={`Cliente ${cliente}`}
              boxSize="100%"
              objectFit="cover"
              filter="grayscale(100%)"
              borderRadius="md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Clientes;
