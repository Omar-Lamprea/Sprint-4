import React from "react";

export const Menu = ()=>{
  return(
    <div id="menu" className="menu col-3 menu-animations-outside">
      <button id="btn-drop-menu" className="drop-menu">
        <img src="../img/up-arrow-angle.png" alt="" width="50" />
      </button>
      <div className="row text-start justify-content-center">
        <div className="col-12" >
          <h2>Ventas</h2>
          <ul>
            <a href="ventasRealizadas.html"><li>Ventas Realizadas</li></a>
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
    </div>
  )
}