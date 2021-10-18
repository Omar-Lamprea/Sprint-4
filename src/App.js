import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Menu} from './components/Menu'
import { Content } from './components/Content'


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Productos } from './components/sections/Productos';
import { Usuarios } from './components/sections/Usuarios';
import { Dashboard } from './components/sections/Dashboard';
import { login } from './components/sections/login';
import { Ventas } from './components/sections/Ventas';

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
        {/* <Content /> */}
        <div id="content" className="col-9">
          <div className="row justify-content-end">
            <div className="col-11 content d-flex flex-column justify-content-center">
              <Router>
                <Switch>
                  <Route path="/productos">
                    <Productos />
                  </Route>
                  <Route path="/usuarios">
                    <Usuarios />
                  </Route>
                  <Route path="/ventas">
                    <Ventas />
                  </Route>
                  <Route path="/">
                    <login />
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
