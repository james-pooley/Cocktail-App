import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const DrinkModel = () => {
  const { scene } = useGLTF('/models/drink.glb'); // Replace with your model path
  const [targetRotation, setTargetRotation] = useState([0, 0, 0]); // Rotation target
  const actualRotation = useRef([0, 0, 0]); // Ref to store current rotation

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize X-axis
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize Y-axis

      // Map normalized coordinates to rotation angles
      const newRotationX = y * Math.PI; // Rotate vertically
      const newRotationY = x * Math.PI; // Rotate horizontally

      // Clamp both X-axis and Y-axis rotations
      const clampedRotationX = Math.max(Math.min(newRotationX, Math.PI / 6), -Math.PI / 6); // ±30°
      const clampedRotationY = Math.max(Math.min(newRotationY, Math.PI / 1.5), -Math.PI /1.5 ); // ±45°

      setTargetRotation([clampedRotationX, clampedRotationY, 0]); // Set target rotation
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Smoothly interpolate toward the target rotation
  useFrame(() => {
    actualRotation.current = actualRotation.current.map((current, index) => {
      const target = targetRotation[index];
      const delta = (target - current) * 0.1; // Adjust 0.1 for faster/slower lag
      return current + delta;
    });
    scene.rotation.set(...actualRotation.current); // Apply the smooth rotation
  });

  return <primitive object={scene} scale={20} position={[0, -2, 0]} />;
};

export default DrinkModel;
