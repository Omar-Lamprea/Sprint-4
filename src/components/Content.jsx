import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from "react-router-dom";

import { Productos } from "./sections/Productos";
import { Producto } from "./sections/Producto";

export const Content = () => {
  return (
    <div id="content" className="col-9">
      <div className="row justify-content-end">
        <div className="col-11 content d-flex flex-column justify-content-center">
          <Router>
            <Switch>
              <Route exact path="/productos/:id" component={Producto} />
              <Route exact path="/productos" component={Productos} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};
