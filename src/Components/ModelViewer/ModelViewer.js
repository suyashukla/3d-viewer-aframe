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
        poster="https://shopease-b42a1.web.app/img/shop_ease_logo1.png"
      ></model-viewer>
    </div>
  );
}

export default ModelViewer;
