import Hero from '../hero/index';
import { GAME_SIZE } from '../../settings/constantes';

export const Board = () => {
  return (
    <>
      <div>
        <Hero />
        <img src="./public/assetes/Assets/tileset.gif" alt="" height={GAME_SIZE} width={GAME_SIZE} />
      </div>
    </>
  );
};


export default Board