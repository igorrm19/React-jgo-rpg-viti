//import { useState } from 'react'
import './App.css'
import Board from '../componentes/board/index'
import MineDemo from './mineDemo'
import Demon from './Demon/index.jsx'


function App() {


  return (
   <div className='classApp'>
     <main className='classApp-main'>
       <MineDemo/>
       <Demon />
       <Board/>
     </main>
   </div>
  )
}

export default App










