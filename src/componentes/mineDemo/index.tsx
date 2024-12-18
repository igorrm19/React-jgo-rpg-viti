import React from 'react'
import './index.css'
import { HERO_HEMET_OFFSET, TILE_SIZE } from '../../settings/constantes';

const MineDemo = () => {
   return(
    <>
      <div 
      
        className='MineDemo-div'

        style={{
          
          height: TILE_SIZE + HERO_HEMET_OFFSET,
          width: TILE_SIZE,
          position: 'absolute',
          bottom: 48*4,
          left: 500,
          backgroundImage: "url(./public/assetes/Assets/MINI-DEMON.png)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE - HERO_HEMET_OFFSET}px`,
          animation: 'MineDemo-animation 1s infinite steps(4)'
          
          }} ></div>
    </>
   )
}

export default MineDemo
   

React.useEffect

