import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode data-oid="-h6qc0_">
    <App data-oid=".9lmrb0" />
    {/* Noise Overlay Filter */}
    <div className="noise-overlay" data-oid="p_p.ll8">
      <svg width="100%" height="100%" data-oid="m6ydo.l">
        <filter id="noiseFilter" data-oid="wzxi_ha">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            data-oid="ftrs95s"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          data-oid="4xzyrog"
        />
      </svg>
    </div>
  </React.StrictMode>,
);
