import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Cylinder, Ring, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Character2Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.01;
      ringRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cuerpo principal */}
      <Torus args={[1, 0.4, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#e74c3c" />
      </Torus>

      {/* Aura exterior */}
      <Ring args={[1.5, 2, 32]} position={[0, 0, 0]} ref={ringRef}>
        <meshStandardMaterial color="#f1c40f" transparent opacity={0.5} />
      </Ring>

      {/* Base */}
      <Cylinder args={[2, 2, 0.2, 32]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#34495e" />
      </Cylinder>

      {/* Efectos de energía */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2000}
            array={new Float32Array(6000).map(() => (Math.random() - 0.5) * 8)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#e74c3c" />
      </points>

      {/* Aura interior */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f1c40f" transparent opacity={0.3} />
      </Sphere>
    </group>
  );
};

export default Character2Scene; 