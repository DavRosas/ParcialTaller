import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, ReactNode } from 'react';

// Props básicas para el personaje
interface BaseCharacterProps {
  children: ReactNode;
  title: string;
  description: string;
}

// Componente base simplificado a ancho completo
const BaseCharacter = ({ children, title, description }: BaseCharacterProps) => {
  return (
    <div style={{ width: '100%', padding: '2rem' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row',
        gap: '2rem',
        width: '100%'
      }}>
        {/* Información del personaje */}
        <div style={{ flex: 1 }}>
          <div style={{ 
            backgroundColor: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        
        {/* Vista 3D */}
        <div style={{ flex: 1, height: '500px' }}>
          <Canvas style={{ width: '100%', height: '100%' }}>
            <Suspense fallback={null}>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              {children}
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default BaseCharacter; 