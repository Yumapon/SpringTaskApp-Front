import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toppage from "../pages/TopPage2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Toppage} />
      </Switch>
    </Router>    
  );
}

export default App;
