import BaseCharacter from '../BaseCharacter';
import Character1Scene from './Character1Scene';

const Character1 = () => {
  return (
    <BaseCharacter
      title="Personaje 1"
      description="Un personaje simple que rota suavemente."
    >
      <Character1Scene />
    </BaseCharacter>
  );
};

export default Character1; 