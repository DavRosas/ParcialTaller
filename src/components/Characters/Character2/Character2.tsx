import BaseCharacter from '../BaseCharacter';
import Character2Scene from './Character2Scene';

const Character2 = () => {
  return (
    <BaseCharacter
      title="Personaje 2: El Guardián"
      description="Un ser místico que protege los secretos del universo con su aura de energía."
      audioSrc="/assets/audio/character2.mp3"
    >
      <Character2Scene />
    </BaseCharacter>
  );
};

export default Character2; 