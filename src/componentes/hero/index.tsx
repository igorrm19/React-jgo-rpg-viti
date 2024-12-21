import useEventListener from '@use-it/event-listener';
import React from 'react'
import './index.css'
import { HERO_HEMET_OFFSET, TILE_SIZE } from '../../settings/constantes';


// function hadclick(event){

//   if(event.key === "l"){
//     setTimeout(() => {
//       const newPosition = {x: 30, y:0};
//       positionStateUpdate(newPosition);
  
//     }, 2000)
//   }

//   console.log("Deu certo", event.key);

// }

const initialPosition = {
  x: 10, 
  y: 10
}

const Hero = () => {

  const [positionState, positionStateUpdate] = React.useState(initialPosition);


   const Mover = (event) => {
    
    if(event.key === "ArrowLeft"){

     const newState = {
      x: positionState.x,
      y: positionState.y - 3, 
     }

     positionStateUpdate(newState);

     }else if(event.key === "ArrowRight"){

      const newState = {
        x: positionState.x ,
        y: positionState.y + 3, 
       }
  
       positionStateUpdate(newState);
  

     }else if(event.key === "ArrowDown"){

      const newState = {
        x: positionState.x - 3,
        y: positionState.y, 
       }
  
       positionStateUpdate(newState);
  

     }else if(event.key === "ArrowUp"){

      const newState = {
        x: positionState.x + 3,
        y: positionState.y, 
       }
  
       positionStateUpdate(newState);
  

     }


   }


   useEventListener('keydown', Mover);
  
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

