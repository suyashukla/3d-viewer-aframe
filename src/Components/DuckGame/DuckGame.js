import React, { useEffect, useRef, useState } from "react";

function DuckGame() {
  const [asset, setAsset] = useState(false);
  const innerRef = useRef(null);
  useEffect(() => {
    const assetRef = innerRef.current;
    assetRef.addEventListener("loaded", handleLoad);
    return () => {
      // unsubscribe event
      assetRef.removeEventListener("loaded", handleLoad);
    };
  }, []);
  const handleLoad = () => {
    setAsset(true);
  };
  return (
    <a-scene physics>
      <a-assets ref={innerRef}>
        <a-asset-item
          id="spaceship"
          response-type="arraybuffer"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fspaceship.glb?v=1637647325572"
          crossOrigin="null"
        ></a-asset-item>
        <img
          id="space"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fspace.jpg?v=1637647325320"
          crossOrigin="null"
        ></img>
      </a-assets>
      {asset ? (
        <>
          <a-sky src="#space"></a-sky>

          <a-entity
            class="rota"
            id="duck1"
            color="#fdfd96"
            scale="0.1 0.1 .1"
            position="2 0 -7"
            animation="property: rotation;from: ; to:0 -360 0; loop:true; easing:linear; dur:30000; resumeEvents: starteventforAnimation "
            animation__mouseenter="property: rotation;from: ; to:0 360 0; easing:linear; dur:4000; startEvents: mouseenter ;pauseEvents: starteventforAnimation; resumeEvents: mouseenter"
            eventhandling
          >
            <a-entity
              class="rota"
              color="#F0FFF0"
              gltf-model="#spaceship"
              position="20 0 -10"
              scale="2 3 3"
              collison-check="el: #otherduck; radius: 1; other-radius: 1;"
              locationupdate1
            ></a-entity>
          </a-entity>

          <a-entity
            class="rota"
            id="duck2"
            color="#ca96fd"
            scale="0.1 0.1 .1"
            position="-3.2 0 -7.3"
            animation="property:rotation;from: ; to:0 360 0; loop:true; easing:linear; dur:40000; pauseEvents: mouseenter; resumeEvents: starteventforAnimationduck2"
            eventhandlingduck2
            animation__mouseenter="property:rotation; to:0 360 0; easing:linear; dur:4000; startEvents: mouseenter; pauseEvents: starteventforAnimationduck2; resumeEvents: mouseenter"
          >
            <a-entity
              class="rota"
              color="#F0FFF0"
              id="otherduck"
              gltf-model="#spaceship"
              position="0 0 -15"
              scale="3 3 2"
              locationupdate2
            ></a-entity>
          </a-entity>

          <a-entity
            class="rota"
            id="sign"
            position="4.5 1.5 -2"
            animation__mouseenter="property:rotation; from: 0 -30 0; to:0 -390 0; easing:linear; dur:2000; startEvents: mouseenter"
            rotation="0 -30 0"
            text="width: 4; align: center; color: black; value: Kill aliens inside"
          >
            <a-box
              class="rota"
              color="#FFFF00"
              position="0 0 -0.05"
              scale="1.8 0.6 0.1"
            ></a-box>
          </a-entity>

          <a-entity
            id="score"
            animation="property:rotation;from: 0 0 0; to:0 360 0; easing:linear; dur:800; startEvents: updateScore"
            position="-4.5 1.5 -5"
            rotation="0 45 0"
            text="width: 4; align: center; color: black; value: Score \n 000"
          >
            <a-box color="#FFFF00" position="0 0 -0.05" scale="0.8 0.6 0.1">
              {" "}
            </a-box>
          </a-entity>

          <a-camera position="0 1.2 1.3">
            <a-cursor objects=".rota"></a-cursor>
          </a-camera>

          <a-entity light="type: ambient; color: #FFF; intensity: 0.5"></a-entity>
          <a-entity
            light="type: directional; color: #FFF; intensity: 0.8"
            position="-0.5 5 4"
          ></a-entity>
        </>
      ) : (
        <></>
      )}
    </a-scene>
  );
}

export default DuckGame;
