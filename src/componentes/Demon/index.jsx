import React from 'react'
import './index.css'
import { DMON_TITLE_SIZA } from '../../settings/constantes';
//import '../../../public/assetes/Assets/DEMON.png'

const Demon = () => {
   return(
    <>
      <div 
      
        className='Demon-div'

        style={{
          
          height: DMON_TITLE_SIZA,
          width: DMON_TITLE_SIZA,
          position: 'absolute',
          bottom: 48*7,
          left: 650,
          backgroundImage: "url(../../../public/assetes/Assets/DEMON.png)",
          backgroundRepeat: 'no-repeat',
          animation: 'Demon-animation 1s infinite steps(4)'
          
          }} ></div>
    </>
   )
}

export default Demon
   

React.useEffect

