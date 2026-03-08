import React from "react";

export function WindowControls({ className = "" }) {
  return (
    <div className={`window-controls ${className}`}>
      <div className="window-dot dot-red"></div>
      <div className="window-dot dot-yellow"></div>
      <div className="window-dot dot-green"></div>
    </div>
  );
}
