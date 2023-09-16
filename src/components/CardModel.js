import React from "react";

const CardModal = ({ ele, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        zIndex: 999999,
        filter: "blur(0) !important",
      }}
    >
      <h2>{ele.name}</h2>
      <p>Additional details or text goes here</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CardModal;
