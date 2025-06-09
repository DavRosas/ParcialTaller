import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      meshStandardMaterial: any;
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    points: any;
    bufferGeometry: any;
    bufferAttribute: any;
    pointsMaterial: any;
    meshStandardMaterial: any;
  }
} 