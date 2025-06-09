import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Octahedron, Cone, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Character3Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x += 0.001;
    }
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cuerpo principal */}
      <Octahedron args={[1, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#9b59b6" />
      </Octahedron>

      {/* Corona de energía */}
      <Cone args={[1.2, 0.5, 8]} position={[0, 1, 0]} rotation={[Math.PI, 0, 0]}>
        <meshStandardMaterial color="#3498db" transparent opacity={0.6} />
      </Cone>

      {/* Base flotante */}
      <Sphere args={[2, 32, 32]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#2c3e50" wireframe />
      </Sphere>

      {/* Partículas dinámicas */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={3000}
            array={new Float32Array(9000).map(() => (Math.random() - 0.5) * 12)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#3498db" />
      </points>

      {/* Orbes de energía */}
      {[...Array(6)].map((_, i) => (
        <Sphere key={i} args={[0.2, 16, 16]} position={[
          Math.cos(i * Math.PI / 3) * 2,
          Math.sin(i * Math.PI / 3) * 2,
          0
        ]}>
          <meshStandardMaterial color="#e74c3c" transparent opacity={0.7} />
        </Sphere>
      ))}
    </group>
  );
};

export default Character3Scene; 