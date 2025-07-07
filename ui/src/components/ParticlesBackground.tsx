/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface ParticlesBackgroundProps {
  theme?: 'cupcake' | 'dark';
}

export default function ParticlesBackground(props: ParticlesBackgroundProps) {
  const { theme } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get theme-specific colors
  const getThemeColors = useCallback(() => {
    if (theme === 'dark') {
      return {
        background: '#1D232A', // dark theme dark background
        particles: '#A6ADBA' // dark theme muted color
      };
    } else {
      // cupcake theme (light)
      return {
        background: '#ECEFF4', // cupcake theme light background
        particles: '#4C566A' // cupcake theme darker color for visibility on light background
      };
    }
  }, [theme]);

  const { particles } = getThemeColors();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {}, []);

  if (!mounted) return null;

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent'
          }
        },
        fpsLimit: 180,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: particles
          },
          links: {
            color: particles,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.2
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }}
    />
  );
}
