import React from "react";
import { useParams } from "react-router";
import "./ModelViewer.css";

function ModelViewer() {
  const params = useParams();
  const url = `https://${params.url.replaceAll("^", "/")}`;
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <model-viewer
        src={url}
        alt="3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        seamless-poster
        shadow-intensity="1"
        camera-controls
        poster="https://image.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg"
      ></model-viewer>
    </div>
  );
}

export default ModelViewer;
