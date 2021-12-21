import React, { useEffect } from "react";
import { useState } from "react";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import Rooms from "./Rooms";

function FreeRoam() {
  const [assets, setAssets] = useState(null);
  const assetsData = [
    {
      id: "carpet-lite",
      url: "https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fcarpet-lite.glb?v=1637671786891",
      position: "0 0.050 0",
      scale: "4.97 1 5.97",
      rotation: "0 0 0",
      animation: "",
    },
    {
      id: "floor-carpet",
      url: "https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Ffloor-carpet.glb?v=1637672800751",
      position: "-0.06 0.050 -17.52",
      scale: "0.2 1 0.2",
      rotation: "0 0 0",
      animation: "",
    },
    {
      id: "office-chair",
      url: "https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Foffice-chair.glb?v=1637672799323",
      position: "0.150 -1.06 -0.8",
      scale: "0.015 0.015 0.015",
      rotation: "0 90 0",
      animation:
        "property: position; to: 0.150 -1.06 0.8; dur: 2000; easing: linear; loop: true; dir: alternate;pauseEvents: mouseenter; resumeEvents: mouseleave;",
    },
    {
      id: "gaming",
      url: "https://cdn.glitch.me/f02a2615-5a80-4ad9-9fed-0e3b54eb75a9%2Fgaming%20chair.glb?v=1635921880478",
      position: "-1.51 0.726 -1.155",
      scale: "1 1 1",
      rotation: "0 90 0",
      animation:
        "property: rotation; to: 0 450 0; loop: true; dur: 10000; easing: linear; pauseEvents: mouseenter; resumeEvents: mouseleave;",
    },
    {
      id: "sofa",
      url: "https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107/Modern%20Full%20Sofa.glb?v=1639475305243",
      position: "0.035 0.026 -17.45",
      scale: "70 70 70",
      rotation: "0 0 0",
      animation:
        "property: rotation;from: 0 0 0; to: 0 360 0; easing: linear; startEvents: click;pauseEvents: mouseleave; resumeEvents: mouseenter; dur: 5000;",
    },
  ];
  useEffect(() => {
    setAssets(assetsData);
  }, []);

  if (assets != null) return <Rooms data={assetsData} />;
  else return <LoadingComponent />;
}

export default FreeRoam;
