//import { useState } from 'react'
import './App.css';
import Board from '../componentes/board/index';
import MineDemo from './mineDemo';
import Demon from './Demon/index.jsx';
import Chest from './Chest/index.js';
import Trap from './Trap/index.js';


function App() {


  return (
   <div className='classApp'>
     <main className='classApp-main'>
       <MineDemo/>
       <Demon />
       <Board/>
       <Chest />
       <Trap />
     </main>
   </div>
  )
}

export default App










