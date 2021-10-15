import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Menu} from './components/Menu'
import {Content} from './components/Content'

document.addEventListener('DOMContentLoaded', ()  =>{
  const btnMenu = document.getElementById('btn-drop-menu')
  const menu = document.getElementById('menu')
  const content = document.getElementById('content')
  
  btnMenu.addEventListener('click', dropMenu)
  function dropMenu(){
    menu.classList.toggle('animations-menu')
    menu.classList.toggle('menu-animations-outside')
    
    if(menu.classList.contains('animations-menu')){
      content.classList.add('animations-content')
      content.classList.remove('content-animations-outside')
    }else{
      content.classList.remove('animations-content')
      content.classList.add('content-animations-outside')
    }
  }
})


function App() {
  return (

    <div className="container">
      <Header />
      <div className="row px-2">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
