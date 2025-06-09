import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const Character1Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cuerpo principal */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4a90e2" />
      </Sphere>

      {/* Ojos */}
      <Sphere args={[0.2, 32, 32]} position={[0.4, 0.3, 0.8]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      <Sphere args={[0.2, 32, 32]} position={[-0.4, 0.3, 0.8]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>

      {/* Base */}
      <Box args={[4, 0.2, 4]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>

      {/* Partículas */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(3000).map(() => (Math.random() - 0.5) * 10)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ffffff" />
      </points>
    </group>
  );
};

export default Character1Scene; 