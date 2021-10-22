import React from 'react';
import './App.css';
// // <<<<<<< HEAD
// // import {Header} from './components/Header'
// // import {Menu} from './components/Menu'
// // import { Content } from './components/Content'
// // import { Producto } from './components/sections/Producto';


// // import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// // import { Productos } from './components/sections/Productos';
// // import { Usuarios } from './components/sections/Usuarios';
// // import { Dashboard } from './components/sections/Dashboard';
// // import { Login } from './components/sections/Login';
// // import { VentasRealizadas } from "./components/sections/VentasRealizadas";
// // import { VentaRegistrar } from "./components/sections/VentaRegistrar";

// //   document.addEventListener('DOMContentLoaded', ()  =>{
// //   const btnMenu = document.getElementById('btn-drop-menu')
// //   const menu = document.getElementById('menu')
// //   const content = document.getElementById('content')
// // =======
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
// // <<<<<<< HEAD
// //   return (
// //     <div className="container">
// //       <Header />
// //       <div className="row px-2">
// //         {/* <Menu /> */}
// //         <Router>
// //           <div id="menu" className="menu col-3 menu-animations-outside">
// //             <button id="btn-drop-menu" className="drop-menu">
// //               <img src="../img/up-arrow-angle.png" alt="" width="50" />
// //             </button>
// //             <div className="row text-start justify-content-center">
// //               <div className="col-12">
// //                 <h2>Ventas</h2>
// //                 <ul>
// //                   {/* <Link to="/ventas">
// //                     <li>Ventas Realizadas</li>
// //                   </Link> */}
// //                   <Link to="/ventas-realizadas">
// //                     <li>Ventas Realizadas</li>
// //                   </Link>
// //                   <Link to="/ventas-registrar">
// //                     <li>Registrar Venta</li>
// //                   </Link>
// //                 </ul>
// //               </div>
// //               <div className="col-12">
// //                 <h2>Productos</h2>
// //                 <ul>
// //                   <Link to="/productos">
// //                     <li>Listar Productos</li>
// //                   </Link>
// //                   <Link to="/productos/create">
// //                     <li>Registrar Productos</li>
// //                   </Link>
// //                 </ul>
// //               </div>
// //               <div className="col-12">
// //                 <h2>Usuarios</h2>
// //                 <ul>
// //                   {/* <a href="usuarios.html">
// //                     <li>Lista de Usuarios</li>
// //                   </a> */}
// //                   <Link to="/usuarios">
// //                     <li>Usuarios</li>
// //                   </Link>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>

// //           {/* <Content /> */}
// //           <div id="content" className="col-9">
// //             <div className="row justify-content-end">
// //               <div className="col-11 content d-flex flex-column justify-content-center">
// //                 <Switch>
// //                   <Route exact path="/productos/:id" component={Producto} />
// //                   <Route exact path="/productos" component={Productos} />
// //                   <Route exact path="/ventas-realizadas" component={VentasRealizadas} />
// //                   <Route exact path="/ventas-registrar/:id?" component={VentaRegistrar} />
// //                   {/* <Route path="/productos">
// //                     <Productos />
// //                   </Route> */}
// //                   <Route path="/usuarios">
// //                     <Usuarios />
// //                   </Route>
// //                   <Route path="/">
// //                     <Login />
// //                   </Route>
// //                 </Switch>
// //               </div>
// //             </div>
// //           </div>
// //         </Router>
// //       </div>
// //     </div>
// //   );
// // }
// // =======

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

  // // >>>>>>> origin/login

  } , [])
  return <>{ usuario ? <Home /> : <Login setUsuario={setUsuario} />}</>
}
export default App;
