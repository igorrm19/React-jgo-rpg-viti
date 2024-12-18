import React from 'react'
import './index.css'
import { HERO_HEMET_OFFSET, TILE_SIZE } from '../../settings/constantes';

const initialPosition = {
  x: 1, 
  y: 1
}

const Hero = () => {
  const [positionState, positionStateUpdate] = React.useState(initialPosition);
  
  setTimeout(() => {
    const newPosition = {x: 30, y:0};
    positionStateUpdate(newPosition);

  }, 2000)

   return(
    <>
      <div 

        className='hero-div'

        style={{
          
          height: 100,
          width: TILE_SIZE,
          position: 'absolute',
          bottom: 300 + positionState.x,
          left: 400 + positionState.y,
          backgroundImage: "url(./public/assetes/Assets/HERO.png)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE-HERO_HEMET_OFFSET}px`,
          animation: 'hero-animation 1s infinite steps(4)'
          
          }} ></div>
    </>
   )
}

export default Hero
   

React.useEffect

