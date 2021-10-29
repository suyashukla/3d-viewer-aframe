import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModelViewer from "./Components/ModelViewer";
import Playground from "./Components/Playground";

function App() {
  return (
    //Router
    <Router>
      <Route path="/playground" exact component={Playground} />
      <Route path="/model/:url" component={ModelViewer} />
    </Router>
  );
}

export default App;
