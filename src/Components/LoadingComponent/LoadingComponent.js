import React from "react";
import ReactLoading from "react-loading";
import "./LoadingComponent.css";

function LoadingComponent() {
  return (
    <div className="center">
      <ReactLoading type="cubes" color="#89bff8" height={"10%"} width={"10%"} />
    </div>
  );
}

export default LoadingComponent;
