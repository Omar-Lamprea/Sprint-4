import React from "react";
import { getAuth, signOut } from 'firebase/auth';
import { useHistory } from "react-router";


export const Header = ()=>{

  const salir = useHistory();
  const auth = getAuth();
  const logOutUsuario = async (e) => {
    localStorage.clear()
    e.preventDefault();
    try {
      const respuesta = await signOut(auth);
      console.log(respuesta);
    } catch (e) {
      throw new Error(e);
    }
  };

  return(
    <header>
      <div className="container-fluid p-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo col-3 d-flex flex-column justify-content-center align-items-center py-3">
              <a href="dashboard.html">
                <img src="./img/logo2.png" alt="LOGO" width="50" />
                <h3>CodeClean Food</h3>
              </a>
            </div>

            <div className=" col-8 py-3 d-flex justify-content-between align-items-center header">
              <img src="./img/three-stars.png" alt="stars" width="40" />
              <div className="m-0 h2">Where you can find the best meals ...❤</div>
              <div className="user d-flex flex-column justify-content-center align-items-center">
                <img src="./img/profile-user.png" alt="User" width="40" />
                <a><button className="btn btn-danger mt-2" id="btn-logout" onClick={logOutUsuario}>Cerrar Sesión</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}