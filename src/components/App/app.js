import React, { Component } from "react";
import { connect } from "react-redux";
import { actionSetCurrentSet } from "../../actions";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";

import Sets from "../Sets";
import Cards from "../Cards";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Sets} />
          <Route path="/cards/:setId" component={Cards} />
        </div>
      </Router>
    );
  }
}
export default connect(
  store => {
    return { currentSet: store.currentSet };
  },
  dispatch => {
    return { setCurrentSet: set => dispatch(actionSetCurrentSet(set)) };
  }
)(App);
