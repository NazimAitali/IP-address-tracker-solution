import React from "react";

const Research = ({ temp, setTemp, setError, setMyLocation }) => {
  return (
    <div className="Research-content">
      <input
        type="text"
        className="Research"
        placeholder="Enter your IP ADDRESS"
        onChange={(e) => {
          setTemp(e.target.value);
        }}
        value={temp ? temp : ""}
      />
      <div
        className="Research-icon"
        onClick={() => {
          setMyLocation(temp);
          setTemp("");
          setError(false);
        }}
      ></div>
    </div>
  );
};
export default Research;
