import React from "react";
import { Usuarios } from "./sections/usuarios";



export const Content = ()=>{
  return(
    <div id="content" className="col-9">
      <div className="row justify-content-end">
        <div className="col-11 content d-flex flex-column justify-content-center">
          {/* agregar paginas acá */}
            <Usuarios/>
        </div>
      </div>
    </div>
  )
}