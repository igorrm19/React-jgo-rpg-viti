import React from 'react'
//import {global} from 'global'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.tsx'
import './index.css'

if(typeof globalThis.global === 'undefined'){
    globalThis.global = globalThis
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

