
import React, { useCallback } from 'react';
import { loadBasic } from '@tsparticles/basic';
import Particles from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log('Particles loaded', container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#3B82F6", "#8B5CF6", "#06B6D4"],
          },
          links: {
            color: "#3B82F6",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
};

export default ParticlesBackground;
