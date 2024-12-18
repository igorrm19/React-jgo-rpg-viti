import React from 'react'
import './index.css'
import { ALEATORIO_BOTTOM, ALEATORIO_LEFT, TILE_SIZE } from '../../settings/constantes';

const Chest = () => {
   return(
    <>
      <div 
      
        className='chest-div'

        style={{
          
          height: 100,
          width: TILE_SIZE,
          position: 'absolute',
          bottom: ALEATORIO_BOTTOM,
          left: ALEATORIO_LEFT,
          backgroundImage: "url(./public/assetes/Assets/CHEST.png)",
          backgroundRepeat: 'no-repeat',
          animation: 'chest-animation 1s infinite steps(2)'
          
          }} ></div>
    </>
   )
}

export default Chest; 
   

React.useEffect

