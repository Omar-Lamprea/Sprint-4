import React from "react";
import "firebase/auth";
import { useState } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import "./Login.css";
import {consultarRoles} from '../config/firebase'

export const Login = (props) => {
  const auth = getAuth();
  let usuario;
  const [registrado, setRegistrado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const createUsuario = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        const user = {
          id: userCredential.user.uid,
          email: userCredential.user.email,
        };
        console.log(user);
        console.log(userCredential);
        return user;
      });
    } catch (e) {
      console.log(e);
    }
  };

  const loginUsuario = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        props.setUsuario(userCredential)
        const user = {
          id: userCredential.user.uid,
          email: userCredential.user.email,
        };
        consultarRoles('usuarios', user.email)
        localStorage.setItem('user', user.email)
        console.log(user);
        return user;
        
      });
    } catch (e) {
      console.log(e);
    }
  };

  const logOutUsuario = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await signOut(auth);
      console.log(respuesta);
    } catch (e) {
      throw new Error(e);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      usuario = user;
      console.log("Usuario logueado");
    } else {
      console.log("El usuario ya no esta logueado");
      usuario = undefined;
    }
  });

  return (
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="login-form d-flex-inline">
              <form onSubmit={loginUsuario}>
                <fieldset>
                  <div className="form-group mt-2">
                    <label>Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Ingresar email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label>Contrase??a</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Ingresar contrase??a"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-4 me-2"
                      onChange={ () => setRegistrado(!registrado)}
                    >{ registrado ? "Reg??strate" : "Iniciar sesi??n" } 
                    </button>
                  </div>
                </fieldset>
              </form>
              <p className="mb-0 mt-3">Rol Admin: admin@gmail.com / 123456</p>
              <p>Rol Vendedor: usuario@gmail.com / usuario123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
