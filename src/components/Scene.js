import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DrinkModel from './DrinkModel';

const Scene = () => {
  return (
    <Canvas style={{ height: '100vh', background: '#ffffff' }}>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* 3D Drink Model */}
      <DrinkModel />

      {/* Optional: Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
