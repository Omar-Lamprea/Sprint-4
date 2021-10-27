import React, { useState, useEffect } from 'react';

import {
    consultarDb, 
    consultarDocumentoDb, 
    agregarDocumentoId,
    actualizarDocumentoDb, 

  } from "../config/firebase";
  
  
  export const VentasRegistrar = ()=>{
  
    const styleVentas = {
      'cursor' : 'pointer'
    }
  
    const [ventas, setVentas] = useState([]);
  
    useEffect(() => {
      getData()
    },[]);
  
    //consultar db
    const getData = async () =>{
      const response = await consultarDb('ventas')
      setVentas(response)
    }
  
    //agregar usuario
    async function addVenta(e){
      e.preventDefault()
      //console.log(e)
      const template = {
        idventa: '',
        idcliente: '',
        nombrecliente: '',
        nombremesero: '',
        productos: '',
        cantidades: '',
        preciototal: '',
        id: ''
      }
      const dataVenta = []
      const addVentaForm = document.querySelectorAll('input[required]')
  
      const ventasRow = document.getElementById('ventasRow')

      for (let i = 0; i < addVentaForm.length; i++) {
        dataVenta.push(addVentaForm[i].value)
      }

      //console.log(dataVenta)
  
      template.idventa = dataVenta[0]
      template.idcliente = dataVenta[1]
      template.nombrecliente = dataVenta[2]
      template.nombremesero = dataVenta[3]
      template.productos = dataVenta[4]
      template.cantidades = dataVenta[5]
      template.preciototal = dataVenta[6]
      template.id = (ventasRow.childElementCount + 1).toString()
  
      //console.log(template)

      if(dataVenta[0] !== '' && dataVenta[1] !== '' && dataVenta[2] !== '' && dataVenta[3] !== '' && dataVenta[4] !== ''  && dataVenta[5] !== ''  && dataVenta[6] !== ''){
        agregarDocumentoId('ventas', template, template.id).then(()=>{
          for (let i = 0; i < addVentaForm.length; i++){
            addVentaForm[i].value = ''
          }
          getData()
        })
      }else{
        alert('debes llenar todos los campos')
      }
    }
  
    //consultar usuario
    const venta = []
  
    async function ventaDetails(e){
      const logoUser = document.getElementById('img-details')
      const title = document.getElementById('venta-name')
      const dataTable = document.getElementById('venta-details')
  
      const id = e.target.id
      
      const response = await consultarDocumentoDb('ventas', id)
      console.log(response.nombre);
      
      const tdidventa = document.getElementById('tdidventa')
      const tdidcliente = document.getElementById('tdidcliente')
      const tdnombrecliente = document.getElementById('tdnombrecliente')
      const tdnombremesero = document.getElementById('tdnombremesero')
      const tdproductos = document.getElementById('tdproductos')
      const tdcantidades = document.getElementById('tdcantidades')
      const tdpreciototal = document.getElementById('tdpreciototal')
  
      title.innerHTML = response.idventa
      tdidventa.innerHTML = response.idventa
      tdidcliente.innerHTML = response.idcliente
      tdnombrecliente.innerHTML = response.nombrecliente
      tdnombremesero.innerHTML = response.nombremesero
      tdproductos.innerHTML = response.productos
      tdcantidades.innerHTML = response.cantidades
      tdpreciototal.innerHTML = response.preciototal
  
      dataTable.classList.remove('d-none')
      logoUser.classList.add('d-none')

      if(venta.length === 0){
        venta.push(response) 
      }else{
        venta.splice(0)
        venta.push(response) 
      }
      return response.idventa
    }
  
    return(
      <div className="row text-center justify-content-between">
        <div className="col-12 col-md-5 my-2">
          <div className="container-ventas border rounded">
            <h4 className="my-2">Ventas</h4>
            <table className="table m-auto">
              <thead>
                <tr>
                  <th>Id Venta</th>
                  <th>Nombre Del Cliente</th>
                </tr>
              </thead>
              <tbody id="ventasRow">
                {ventas.map((venta)=>(
                  <tr onClick={ventaDetails} style={styleVentas}>
                    <td id={venta.id}>{venta.idventa}</td>
                    <td id={venta.id}>{venta.nombrecliente}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" className="btn btn-warning my-2" data-bs-toggle="modal" data-bs-target="#addVenta">Registar Venta</button>
  
            {/* <!-- Modal --> */}
            <div className="modal fade" id="addVenta" tabIndex="-1" aria-labelledby="addVentaLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addVentaLabel">Nueva Venta</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form>
                    <div className="modal-body">
                      <table className="table">
                        <tbody id="add-venta">
                          <tr>
                            <th>Id De Venta</th>
                            <td><input type="text" name="idventa" required/></td>
                          </tr>
                          <tr>
                            <th>Id Del Cliente</th>
                            <td><input type="number" name="idcliente" required/></td>
                          </tr>
                          <tr>
                            <th>Nombre Del Cliente</th>
                            <td><input type="text" name="nombrecliente" required/></td>
                          </tr>
                          <tr>
                            <th>Nombre Del Mesero</th>
                            <td><input type="text" name="nombremesero" required/></td>
                          </tr>
                          <tr>
                            <th>Codigo De Los Productos</th>
                            <td><input type="text" name="productos" required/></td>
                          </tr>
                          <tr>
                            <th>Cantidades De Los Productos</th>
                            <td><input type="text" name="cantidades" required/></td>
                          </tr>
                          <tr>
                            <th>Precio Total</th>
                            <td><input type="text" name="preciototal" required/></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                      <button id="send-venta" type="submit" onClick={addVenta} data-bs-dismiss="modal" className="btn btn-add-venta">Resgistrar Venta</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-12 col-md-7 my-2">
          <div className="detalles-venta border rounded d-flex flex-column justify-content-around align-items-center">
            <h4 id="venta-name" className="my-2">Detalles De Venta</h4>
            <img id="img-details" className="m-4" src="./img/logo2.png" alt="ventas" width="150"/>
  
            <table id="venta-details" className="table d-none">
              <tbody>
                <tr>
                  <th>Id De Venta</th>
                  <td id='tdidventa'>idventa</td>
                </tr>
                <tr>
                  <th>Id Del Cliente</th>
                  <td id='tdidcliente'>idcliente</td>
                </tr>
                <tr>
                  <th>Nombre Del Cliente</th>
                  <td id='tdnombrecliente'>nombrecliente</td>
                </tr>
                <tr>
                  <th>Nombre Del Mesero</th>
                  <td id='tdnombremesero'>nombremesero</td>
                </tr>
                <tr>
                  <th>Productos</th>
                  <td id='tdproductos'>productos</td>
                </tr>
                <tr>
                  <th>Cantidades</th>
                  <td id='tdcantidades'>cantidades</td>
                </tr>
                <tr>
                  <th>Precio Total</th>
                  <td id='tdpreciototal'>preciototal</td>
                </tr>
              </tbody>
            </table>
  
            {/* <Venta/> */}
            
          </div>
        </div>
      </div>
    )
}
