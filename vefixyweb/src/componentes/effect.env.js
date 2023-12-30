import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation1 = keyframes`
  0%, 40%, 100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px);
  }
`;

const waveAnimation2 = keyframes`
  0%, 40%, 100% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-3px);
  }
`;

const waveAnimation3 = keyframes`
  0%, 40%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-1px);
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
`;

const Wave = styled.svg`
  width: 100%;
  height: 44px;
  fill: rgba(45, 55, 72, 0.4);
`;

const MovingWaves = styled.g`
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const AnimatedWave = styled(Wave)`
  animation: ${waveAnimation1} 2s ease-in-out infinite;
`;

const AnimatedWave2 = styled(Wave)`
  animation: ${waveAnimation2} 2s ease-in-out infinite;
`;

const AnimatedWave3 = styled(Wave)`
  animation: ${waveAnimation3} 2s ease-in-out infinite;
`;

const Effect = () => {
  return (
    <WaveContainer>
      <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <MovingWaves>
          <AnimatedWave xlinkHref="#gentle-wave" x="48" y="-1" />
          <AnimatedWave2 xlinkHref="#gentle-wave" x="48" y="3" />
          <AnimatedWave3 xlinkHref="#gentle-wave" x="48" y="5" />
        </MovingWaves>
      </Wave>
    </WaveContainer>
  );
};

export default Effect;
