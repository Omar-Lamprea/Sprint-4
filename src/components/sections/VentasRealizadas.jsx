import React, { useState, useEffect } from 'react';
import { consultarDb } from '../config/firebase'
export const VentasRealizadas = () => {
  const [ventas, setventas] = useState([]);

  useEffect(() => {
    lecturaBaseDeDatos()
  },[]);

    async function lecturaBaseDeDatos (){
      const respuesta = await consultarDb("ventas")
      setventas(respuesta)
    }
    
    return (
        <>
         <h2 className="text-center">Ventas Realizadas</h2> 
      
          
          
            <div className="row justify-content-center">
              <div className="col-11 my-2">
                <div className="row text-center justify-content-between">
                  
                  <div className="col-12 col-md-12 my-2">
                    <div className="container-ventas border rounded" >
                      {/* <h4 className="my-2">Ventas</h4> */}
                      <table className="table m-auto">
                        <thead>
                          <tr>
                            <th>Id Venta</th>
                            <th>Id Cliente</th>
                            <th>Nombre Cliente</th>
                            <th>Nombre Mesero</th>
                            <th>Productos</th>
                            <th>Cantidades</th>
                            <th>Precio Total</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody id="ventar-list">
                          {ventas.map((venta)=>(
                            <tr>
                              <td> {venta.idventa} </td>
                              <td>{venta.idcliente}</td>
                              <td>{venta.nombrecliente}</td>
                              <td>{venta.nombremesero}</td>
                              <td>{venta.productos}</td>
                              <td>{venta.cantidades}</td>
                              <td>{venta.preciototal}</td>
                            </tr>
                          )) }
                        </tbody>
                      </table>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          
      

  


        </>
    )
}
