import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouterContext,
  useHistory
} from "react-router-dom";

export const Menu = ()=>{

  // // // let history = useHistory()
  // // // const irUsuarios = (e) => {
  // // //   e.preventDefault()
  // // //   history.push("/usuarios")
  // // // }

  return (
    <div id="menu" className="menu col-3 menu-animations-outside">
      <button id="btn-drop-menu" className="drop-menu">
        <img src="../img/up-arrow-angle.png" alt="" width="50" />
      </button>
      <Router>
      <div className="row text-start justify-content-center">
        <div className="col-12" >
          <h2>Ventas</h2>
          <ul>
            <li><Link to="/ventas">Ventas Realizadas JAAA</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            {/* <a onClick={irUsuarios} href="#"><li>Ventas Realizadas B</li></a> */}
            <a href="ventasRealizadas.html"><li>Ventas Re gti alizadas</li></a>
            <a href="ventasRealizadas.html"><li>Ventas Re gti alizadas</li></a>
            <a href="registrar_venta.html"><li>Registrar Ventas</li></a>
          </ul>
        </div>
        <div className="col-12" >
          <h2>Productos</h2>
          <ul>
            <a href="listarproductos.html"><li>Productos</li></a>
            <a href="productoRegistrar.html"><li>Registrar Productos</li></a>
          </ul>
        </div>
        <div className="col-12" >
          <h2>Usuarios</h2>
          <ul>
            <a href="usuarios.html"><li>Lista de Usuarios</li></a>
          </ul>
        </div>
      </div>
      </Router>      
    </div>
  )
}