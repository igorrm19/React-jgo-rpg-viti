import React from 'react'
import './index.css'
import { TILE_SIZE } from '../../settings/constantes';

const Hero = () => {
   return(
    <>
      <div 

        className='hero-div'

        style={{
          
          height: 100,
          width: TILE_SIZE,
          position: 'absolute',
          bottom: 48,
          left: 500,
          backgroundImage: "url(./public/assetes/Assets/HERO.png)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE-12}px`,
          animation: 'hero-animation 1s infinite steps(4)'
          
          }} ></div>
    </>
   )
}

export default Hero
   

React.useEffect

