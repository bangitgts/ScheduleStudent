import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Room } from "./pages/ActionManger/Room";
import {routes} from "../src/routers"
class App extends Component {
  showContent(routes) {
    var result = null;
    if (routes.length > 0) {
      var result = routes.map((route) => {
        return (
          <Route path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  }
  render() {
    return (
      <Router>
        {this.showContent(routes)}
      </Router>
    );
  }
}
export default App;
