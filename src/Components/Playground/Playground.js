import React from "react";

function Playground() {
  return (
    <div>
      <a-scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
          <a-mixin
            id="voxel"
            geometry="primitive: box; height: 0.5; width: 0.5; depth: 0.5"
            material="shader: standard"
            random-color
            snap="offset: 0.25 0.25 0.25; snap: 0.5 0.5 0.5"
          ></a-mixin>
        </a-assets>

        <a-cylinder
          id="ground"
          src="#groundTexture"
          radius="30"
          height="0.1"
        ></a-cylinder>

        <a-sky
          id="background"
          src="#skyTexture"
          theta-length="90"
          radius="30"
        ></a-sky>

        {/* Camera */}
        <a-camera>
          <a-cursor intersection-spawn="event: click; mixin: voxel"></a-cursor>
        </a-camera>
      </a-scene>
    </div>
  );
}

export default Playground;
