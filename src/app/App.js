import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toppage from "../pages/TopPage2";
import Addpage from "../pages/AddPage2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/top" component={Toppage} exact />
        <Route path="/add" component={Addpage} exact />
        <Route path="/" component={Toppage} />
      </Switch>
    </Router>    
  );
}

export default App;
