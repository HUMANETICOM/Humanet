import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import AboutUs from "views/examples/AboutUs.js";
import HumaE from './views/examples/HumaE.js';
import SignupUser from './views/examples/SignupUser.js';
import SignupProvider from './views/examples/SignupProvider.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/about-us"
        render={(props) => <AboutUs {...props} />}
      />
      <Route
        path="/huma-e"
        render={(props) => <HumaE {...props} />}
      />
      <Route
        path="/signup-user"
        render={(props) => <SignupUser {...props} />}
      />
      <Route
        path="/signup-provider"
        render={(props) => <SignupProvider {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
