import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModelViewer from "./Components/ModelViewer";

function App() {
  return (
    <Router>
      <Route path="/:url" component={ModelViewer} />
    </Router>
  );
}

export default App;
