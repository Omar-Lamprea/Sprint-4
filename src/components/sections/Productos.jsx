import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { consultarDb, eliminarDocumentoDb } from "../config/firebase";
import { Loading } from "./Loading";
import "./Producto.css";
import "./Producto.jsx";

export const Productos = () => {
  const { id } = useParams();
  // console.log(id);

  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const cargarProductos = async () => {
    setLoading(true);
    const listaTemporal = await consultarDb("productos");
    // console.log(listaTemporal);
    setListaProductos(listaTemporal);
    setLoading(false);
  };
  // cargarProductos()

  useEffect(() => {
    if (id !== "delete") {
      cargarProductos();
    }
  }, [id]);

  async function eliminarProducto(e) {
    await eliminarDocumentoDb("productos", e.target.id);
    console.log(e.target.id);
    cargarProductos();
  }

  const styleButton = {
    "width": "13rem",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-center">
            Lista Productos
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2 mt-2">
              <input
                type="search"
                className="form-control ds-input mt-2"
                id="search-input"
                placeholder="Buscar..."
                autocomplete="off"
                spellcheck="true"
              ></input>
              <Link
                to="/productos/create"
                className="btn btn-success btn-sm"
                style={styleButton}
              >
                Agregar Producto
              </Link>
            </div>
          </h1>
          <hr />
          <table className="table table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre Producto</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {listaProductos.map((producto, indice) => (
                <tr key={producto.id}>
                  <th scope="row">{indice + 1}</th>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.precio}</td>
                  <td>
                    <Link
                      className="btn btn-link fa fa-edit btn-sm float-sm"
                      title="Editar Producto"
                      to={`/productos/${producto.id}`}
                    />

                    <Link
                      className="btn btn-link fa fa-trash btn-sm float-sm"
                      title="Eliminar Producto"
                      onClick={eliminarProducto}
                      id={producto.id}
                      to={`/productos`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
