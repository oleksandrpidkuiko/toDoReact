import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "../redux/containers/Login"
import Registration from "../redux/containers/Registration"
import Menu from "../redux/containers/Menu"
import Tasks from "../redux/containers/Tasks"

class Controller extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Menu} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/tasks/" component={Tasks} />
        <Route exact path="/registration/" component={Registration}/>
      </Router>
    );
  }
}

export default Controller;
