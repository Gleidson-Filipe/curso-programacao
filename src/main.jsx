import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode data-oid=".e1doq:">
    <App data-oid="_a1owxl" />
    {/* Noise Overlay Filter */}
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
      data-oid="pnboi4r"
    >
      <svg width="100%" height="100%" data-oid="z99:27g">
        <filter id="noiseFilter" data-oid="o3x5uiw">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            data-oid="4uxkzc2"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          data-oid="dgyqaic"
        />
      </svg>
    </div>
  </React.StrictMode>,
);
