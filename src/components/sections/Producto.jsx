import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  actualizarDocumentoDb,
  consultarDocumentoDb,
  agregarDocumento,
} from "../config/firebase";
import { Loading } from "./Loading";
import "./Producto.css";

export const Producto = () => {
  const { id } = useParams();
  console.log(id);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const consultarProducto = async (idProducto) => {
    setLoading(true);
    const productoTemp = await consultarDocumentoDb("productos", idProducto);
    console.log(productoTemp);
    setNombre(productoTemp.nombre);
    setDescripcion(productoTemp.descripcion);
    setPrecio(productoTemp.precio);
    setLoading(false);
  };

  useEffect(() => {
    if (id !== "create") {
      consultarProducto(id);
    }

    setNombre("");
    setDescripcion("");
    setPrecio("");
  }, [id]);

  const handleActualizarProducto = async (e) => {
    e.preventDefault();

    const producto = {
      nombre,
      descripcion,
      precio,
    };
    // console.log(producto);

    await actualizarDocumentoDb("productos", id, producto);
    history.push("/productos");
  };

  const handleGuardarProducto = async (e) => {
    e.preventDefault();

    const producto = {
      nombre,
      descripcion,
      precio,
    };

    await agregarDocumento("productos", producto);
    history.push("/productos");
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-center">
            {id === "create" ? "Agregar " : "Editar "}Producto
          </h1>
          <hr />
          <div className="mt-3">
            <div className="row">
              <div className="offset-md-3 col-md-6">
                <form>
                  <div className="mb-3">
                    <span>
                      <i class="fa fa-coffee"></i>
                    </span>
                    <label className="form-label ms-2">Nombre Producto</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nombre producto"
                      value={nombre}
                      onChange={(event) => setNombre(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <span>
                      <i class="fa fa-clipboard"></i>
                    </span>
                    <label className="form-label ms-2">Descripción</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Descripcion"
                      value={descripcion}
                      onChange={(event) => setDescripcion(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <span>
                      <i class="fa fa-tags"></i>
                    </span>
                    <label className="form-label ms-2">Precio</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Precio"
                      value={precio}
                      onChange={(event) => setPrecio(event.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-primary form-control"
                    onClick={
                      id === "create"
                        ? handleGuardarProducto
                        : handleActualizarProducto
                    }
                  >
                    {id === "create" ? "Guardar" : "Actualizar"} Producto
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
