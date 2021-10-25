import React from "react";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { Content } from "../Content";
import { Producto } from "./Producto";
import { Ventas } from "./Ventas";
import { Usuarios } from "./Usuarios";
import { Productos } from "./Productos";
import {VentasRealizadas} from './VentasRealizadas'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { signOut, getAuth } from 'firebase/auth';


export const Home = () => {

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
                  <Link to="/VentasRealizadas">
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
                  <Route path="/VentasRealizadas">
                    <VentasRealizadas />
                  </Route>
                  <Route path="/">
                    
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </div>


  );
};
