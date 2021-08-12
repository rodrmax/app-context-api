import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "../Context/userContext";

import Home from "../Pages/Register/home";
import Detail from "../Pages/Register/detail";
import Page404 from "../Pages/Error/404";

const Routers = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routers;
