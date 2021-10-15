import React from "react";

export const Usuarios = ()=>{
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
            <tbody id="user-list">
              
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
                          <td><input type="text" name="telefono" required/></td>
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
                    <button id="send-user" type="submit" className="btn btn-add-user" data-bs-dismiss="modal">Agregar Usuario</button>
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
            <img id="img-details" src="./img/logo2.png" alt="usuarios" width="150" className="m-4"/>
          <table id="user-details" className="table d-none">
          </table>
          <button className="d-none btn btn-warning my-2" id="btn-save-data"><h5 className="m-0">Guardar</h5></button>
        </div>
      </div>
    </div>
  )
}