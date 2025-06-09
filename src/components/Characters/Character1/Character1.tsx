import BaseCharacter from '../BaseCharacter';
import Character1Scene from './Character1Scene';

const Character1 = () => {
  return (
    <BaseCharacter
      title="Personaje 1: El Explorador"
      description="Un personaje misterioso que flota en el espacio, explorando las dimensiones desconocidas."
      audioSrc="/assets/audio/character1.mp3"
    >
      <Character1Scene />
    </BaseCharacter>
  );
};

export default Character1; 