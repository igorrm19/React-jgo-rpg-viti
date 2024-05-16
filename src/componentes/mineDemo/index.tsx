import React from 'react'
import './index.css'
import { TILE_SIZE } from '../../settings/constantes';

const MineDemo = () => {
   return(
    <>
      <div 
      
        className='MineDemo-div'

        style={{
          
          height: 100,
          width: TILE_SIZE,
          position: 'absolute',
          bottom: 48*4,
          left: 500,
          backgroundImage: "url(./public/assetes/Assets/MINI-DEMON.png)",
          backgroundRepeat: 'no-repeat',
          animation: 'MineDemo-animation 1s infinite steps(4)'
          
          }} ></div>
    </>
   )
}

export default MineDemo
   

React.useEffect

