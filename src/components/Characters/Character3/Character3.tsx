import BaseCharacter from '../BaseCharacter';
import Character3Scene from './Character3Scene';

const Character3 = () => {
  return (
    <BaseCharacter
      title="Personaje 3: El Sabio"
      description="Un ser de conocimiento puro que flota en el espacio, emanando sabiduría y energía cósmica."
      audioSrc="/assets/audio/character3.mp3"
    >
      <Character3Scene />
    </BaseCharacter>
  );
};

export default Character3; 