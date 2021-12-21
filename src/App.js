import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DuckGame from "./Components/DuckGame/DuckGame";
import FreeRoam from "./Components/3dGallery/FreeRoam";
import ModelViewer from "./Components/ModelViewer/ModelViewer";
import Playground from "./Components/Playground/Playground";

function App() {
  return (
    //Router
    <Router>
      <Route path="/playground" exact component={Playground} />
      <Route path="/model/:url" component={ModelViewer} />
      <Route path="/freeroam" component={FreeRoam} />
      <Route path="/duckgame" component={DuckGame} />
    </Router>
  );
}

export default App;
