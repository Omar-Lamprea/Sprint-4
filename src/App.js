import React from 'react';
import './App.css';
import "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import { Login } from './components/sections/Login';
import { Home } from './components/sections/Home';
import { onAuthStateChanged, getAuth } from "firebase/auth";

//   document.addEventListener('DOMContentLoaded', ()  =>{
//   const btnMenu = document.getElementById('btn-drop-menu')
//   const menu = document.getElementById('menu')
//   const content = document.getElementById('content')
  
//   btnMenu.addEventListener('click', dropMenu)
//   function dropMenu(){
//     menu.classList.toggle('animations-menu')
//     menu.classList.toggle('menu-animations-outside')
    
//     if(menu.classList.contains('animations-menu')){
//       content.classList.add('animations-content')
//       content.classList.remove('content-animations-outside')
//     }else{
//       content.classList.remove('animations-content')
//       content.classList.add('content-animations-outside')
//     }
//   }
// })


function App() {

  const auth = getAuth();
  const [usuario, setUsuario] = useState(null);

  useEffect(()=>{
  
    onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        console.log("Usuario logueado");
        setUsuario(usuario)
      } else {
        console.log("El usuario ya no esta logueado");
        setUsuario(null);
      }
    });

  } , [])
  return <>{ usuario ? <Home /> : <Login setUsuario={setUsuario} />}</>
}
export default App;
