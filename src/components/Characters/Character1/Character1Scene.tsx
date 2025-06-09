import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// Personaje simple con rotación básica
const Character1Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Rotación simple
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cuerpo principal */}
      <Sphere args={[1, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4a90e2" />
      </Sphere>

      {/* Base simple */}
      <Box args={[3, 0.2, 3]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>
    </group>
  );
};

export default Character1Scene; 