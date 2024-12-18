import React from 'react'
import './index.css'
import { TILE_SIZE } from '../../settings/constantes';

const Trap = () => {
   return(
    <>
      <div 
      
        className='trap-div'

        style={{
          
          height: 101, 
          width: TILE_SIZE,
          position: 'absolute',
          bottom: 48,
          left: 400,
          backgroundImage: "url(./public/assetes/Assets/TRAP.png)",
          backgroundRepeat: 'no-repeat',
          animation: 'trap-animation 1s infinite steps(4)'
          
          }} ></div>
    </>
   )
}

export default Trap;  
   

React.useEffect;



