// src/react-mouse-particles.d.ts
declare module 'react-mouse-particles' {
  import { ComponentType } from 'react';

  interface MouseParticlesProps {
    g?: number;
    color?: string | string[];
    cull?: string;
    level?: number;
    [key: string]: any;
  }

  const MouseParticles: ComponentType<MouseParticlesProps>;

  export default MouseParticles;
}
