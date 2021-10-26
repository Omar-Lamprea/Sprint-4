import React, { useState, useEffect } from 'react';
import {
  consultarDb, 
  consultarDocumentoDb, 
  // agregarDocumento, 
  agregarDocumentoId,
  actualizarDocumentoDb, 
  // eliminarDocumentoDb, 
} from "../config/firebase";

  // agregarDocumento('usuarios', data)
  // console.log(await consultarDb('usuarios'));
  // console.log(await consultarDocumentoDb('usuarios', '1'));
  // actualizarDocumentoDb('usuarios', "kMlsj9sSvxsbZ3LDamXr", data)
  // eliminarDocumentoDb('usuarios', 'kMlsj9sSvxsbZ3LDamXr')

export const Usuarios = ()=>{

  const estado = document.getElementById('estado')
  const rol = document.getElementById('rol')

  const styleUsers = {
    'cursor' : 'pointer'
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData()
  },[]);

  //consultar db
  const getData = async () =>{
    const response = await consultarDb('usuarios')
    setUsers(response)
  }

  //agregar usuario
  async function addUser(e){
    e.preventDefault()
    const template = {
      nombre: '',
      cedula: '',
      email: '',
      telefono: '',
      ciudad: '',
      estado: '',
      rol: '',
      id: ''
    }
    const dataUser = []
    const addUserForm = document.querySelectorAll('input[required]')
    const selectForm = document.querySelectorAll('select[name]')

    for (let i = 0; i < addUserForm.length; i++) {
      dataUser.push(addUserForm[i].value)
    }
    //recorro selects
    for (let i = 0; i < selectForm.length; i++) {
      dataUser.push(selectForm[i].value)
    }

    const usersRow = document.getElementById('usersRow')

    template.nombre = dataUser[0]
    template.cedula = dataUser[1]
    template.email = dataUser[2]
    template.telefono = dataUser[3]
    template.ciudad = dataUser[4]
    template.estado = dataUser[5]
    template.rol = dataUser[6]
    template.id = (usersRow.childElementCount + 1).toString()


    if(dataUser[0] !== '' && dataUser[1] !== '' && dataUser[2] !== '' && dataUser[3] !== '' && dataUser[4] !== ''){
      agregarDocumentoId('usuarios', template, template.id).then(()=>{
        for (let i = 0; i < addUserForm.length; i++){
          addUserForm[i].value = ''
        }
        getData()
      })
    }else{
      alert('debes llenar todos los campos')
    }
  }

  //consultar usuario
  const user = [];
  async function userDetails(e){
    const logoUser = document.getElementById('img-details')
    const btnSave = document.getElementById('btn-save-data')
    const title = document.getElementById('user-name')
    const dataTable = document.getElementById('user-details')

    const id = e.target.id
    
    const response = await consultarDocumentoDb('usuarios', id)
    // console.log(response);
    
    const tdNombre = document.getElementById('tdNombre')
    const tdCc = document.getElementById('tdCc')
    const tdEmail = document.getElementById('tdEmail')
    const tdTel = document.getElementById('tdTel')
    const tdCiudad = document.getElementById('tdCiudad')

    title.innerHTML = response.nombre
    tdNombre.innerHTML = response.nombre
    tdCc.innerHTML = response.cedula
    tdEmail.innerHTML = response.email
    tdTel.innerHTML = response.telefono
    tdCiudad.innerHTML = response.ciudad

    for (let i = 0; i < estado.children.length; i++) {
      if(response.estado === estado.children[i].value){
        estado.children[i].setAttribute('selected', '')
        // console.log(estado.children[i]);
      }
    }
    for (let i = 0; i < rol.children.length; i++) {
      if(response.rol === rol.children[i].value){
        // console.log(rol.children[i].value);
        rol.children[i].setAttribute('selected', '')
      }
    }

    dataTable.classList.remove('d-none')
    logoUser.classList.add('d-none')
    btnSave.classList.remove('d-none')

    if(user.length === 0){
      user.push(response) 
    }else{
      user.splice(0)
      user.push(response) 
    }
    return response.nombre
  }
  
  async function actualizarUsuario(){
    const data = {
      estado: estado.value,
      rol: rol.value
    }
    // console.log(user[0]);
    await actualizarDocumentoDb('usuarios', user[0].id, data)
    getData()
  }

  return(
    <div className="row text-center justify-content-between">
      <div className="col-12 col-md-5 my-2">
        <div className="container-users border rounded">
          <h4 className="my-2">Usuarios</h4>
          <table className="table m-auto">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody id="usersRow">
              {users.map((user)=>(
                <tr onClick={userDetails} style={styleUsers}>
                  <td id={user.id}>{user.nombre}</td>
                  <td id={user.id}>{user.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="btn btn-warning my-2" data-bs-toggle="modal" data-bs-target="#addUser">Agregar Usuario</button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="addUser" tabIndex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addUserLabel">Nuevo Usuario</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                  <div className="modal-body">
                    <table className="table">
                      <tbody id="add-user">
                        <tr>
                          <th>Nombre</th>
                          <td><input type="text" name="nombre" required/></td>
                        </tr>
                        <tr>
                          <th>Cédula</th>
                          <td><input type="number" name="cedula" required/></td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td><input type="text" name="email" required/></td>
                        </tr>
                        <tr>
                          <th>Teléfono</th>
                          <td><input type="tel" name="telefono" required/></td>
                        </tr>
                        <tr>
                          <th>Ciudad</th>
                          <td><input type="text" name="ciudad" required/></td>
                        </tr>
                        <tr>
                          <th>Estado</th>
                          <td>
                            <select name="estado">
                              <option value="Pendiente">Pendiente</option>
                              <option value="Disponible">Disponible</option>
                              <option value="Aprobado">Aprobado</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th>Rol</th>
                          <td>
                            <select name="rol">
                              <option value="Vendedor">Vendedor</option>
                              <option value="Administrador">Administrador</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="send-user" type="submit" onClick={addUser} data-bs-dismiss="modal" className="btn btn-add-user">Agregar Usuario</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-7 my-2">
        <div className="detalles-usuario border rounded d-flex flex-column justify-content-around align-items-center">
          <h4 id="user-name" className="my-2">Detalles de Usuario</h4>
          <img id="img-details" className="m-4" src="./img/logo2.png" alt="usuarios" width="150"/>

          <table id="user-details" className="table d-none">
            <tbody>
              <tr>
                <th>Nombre</th>
                <td id='tdNombre'>nombre</td>
              </tr>
              <tr>
                <th>Cédula</th>
                <td id='tdCc'>cc</td>
              </tr>
              <tr>
                <th>Email</th>
                <td id='tdEmail'>email</td>
              </tr>
              <tr>
                <th>Tel</th>
                <td id='tdTel'>tel</td>
              </tr>
              <tr>
                <th>Ciudad</th>
                <td id='tdCiudad'>ciudad</td>
              </tr>
              <tr>
                <th>Estado</th>
                <td>
                  <select name="estado" id="estado">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Disponible">Disponible</option>
                    <option value="Aprobado">Aprobado</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Rol</th>
                <td>
                  <select name="rol" id="rol">
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <Usuario/> */}

          <button className="d-none btn btn-warning my-2" id="btn-save-data"><h5 className="m-0" onClick={actualizarUsuario}>Guardar</h5></button>
        </div>
      </div>
    </div>
  )
}