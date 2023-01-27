import React from "react";
import Machine from "./Machine/Machine";

function Machines() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "30px",
          backgroundColor: "#006699",
        }}
      >
        <div>
          <h1
            style={{
              textSizeAdjust: "15px",
              textAlign: "center",
              color: "white",
            }}
          >
            Enicarthage
          </h1>
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
      </div>
    </div>
  );
}

export default Machines;
