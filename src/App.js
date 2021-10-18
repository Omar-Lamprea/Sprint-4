import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Menu} from './components/Menu'
import { Content } from './components/Content'
import { Producto } from './components/sections/Producto';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Productos } from './components/sections/Productos';
import { Usuarios } from './components/sections/Usuarios';
import { Dashboard } from './components/sections/Dashboard';
import { Login } from './components/sections/Login';
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
        {/* <Menu /> */}
        <Router>
          <div id="menu" className="menu col-3 menu-animations-outside">
            <button id="btn-drop-menu" className="drop-menu">
              <img src="../img/up-arrow-angle.png" alt="" width="50" />
            </button>
            <div className="row text-start justify-content-center">
              <div className="col-12">
                <h2>Ventas</h2>
                <ul>
                  {/* <Link to="/ventas">
                    <li>Ventas Realizadas</li>
                  </Link> */}
                  <Link to="/productos">
                    <li>Ventas Realizadas</li>
                  </Link>
                  <Link to="/productos/create">
                    <li>Registrar Venta</li>
                  </Link>
                </ul>
              </div>
              <div className="col-12">
                <h2>Productos</h2>
                <ul>
                  <Link to="/productos">
                    <li>Listar Productos</li>
                  </Link>
                  <Link to="/productos/create">
                    <li>Registrar Productos</li>
                  </Link>
                  {/* <a href="listarproductos.html">
                    <li>Productos</li>
                  </a>
                  <a href="productoRegistrar.html">
                    <li>Registrar Productos</li>
                  </a> */}
                </ul>
              </div>
              <div className="col-12">
                <h2>Usuarios</h2>
                <ul>
                  {/* <a href="usuarios.html">
                    <li>Lista de Usuarios</li>
                  </a> */}
                  <Link to="/usuarios">
                    <li>Usuarios</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* <Content /> */}
          <div id="content" className="col-9">
            <div className="row justify-content-end">
              <div className="col-11 content d-flex flex-column justify-content-center">
                <Switch>
                  <Route exact path="/productos/:id" component={Producto} />
                  <Route exact path="/productos" component={Productos} />
                  {/* <Route path="/productos">
                    <Productos />
                  </Route> */}
                  <Route path="/usuarios">
                    <Usuarios />
                  </Route>
                  <Route path="/ventas">
                    <Ventas />
                  </Route>
                  <Route path="/">
                    <Login />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
