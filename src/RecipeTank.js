import React from "react";

const RecipeTank = ({ ingredient, level }) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h3>{ingredient}</h3>
      <div
        style={{
          width: "100px",
          height: "200px",
          border: "2px solid #000",
          position: "relative",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: `${level}%`,
            backgroundColor: "#4caf50",
            position: "absolute",
            bottom: 0,
          }}
        />
      </div>
      <p>{level}%</p>
    </div>
  );
};

export default RecipeTank;
