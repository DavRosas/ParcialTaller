import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense, ReactNode } from 'react';

interface BaseCharacterProps {
  children: ReactNode;
  title: string;
  description: string;
  audioSrc: string;
}

const BaseCharacter = ({ children, title, description, audioSrc }: BaseCharacterProps) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
              <div className="audio-controls">
                <audio controls className="w-100">
                  <source src={audioSrc} type="audio/mpeg" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="character-canvas" style={{ height: '500px' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  minDistance={3}
                  maxDistance={10}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} />
                <Environment preset="sunset" />
                {children}
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCharacter; 