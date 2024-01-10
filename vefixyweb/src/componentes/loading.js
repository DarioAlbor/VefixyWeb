import React, { createContext, useContext, useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Comprobar si la página se está recargando
    const isReloading = localStorage.getItem('isReloading');
    if (isReloading) {
      // Si la página se está recargando, mostrar el spinner
      setLoading(true);
      localStorage.removeItem('isReloading');
    } else {
      // Si no se está recargando, ocultar el spinner después de un breve tiempo
      setTimeout(() => {
        hideLoading();
      }, 1000);
    }
  }, []);

  useEffect(() => {
    // Al cerrar la aplicación, establecer que se está recargando la página
    const handleBeforeUnload = () => {
      localStorage.setItem('isReloading', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const CustomLoading = () => {
    if (!loading) {
      return null;
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
        }}
      >
        <Spinner size="xl" color="teal.500" />
        <p style={{ marginTop: '10px' }}>Cargando datos...</p>
      </div>
    );
  };

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading, CustomLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
