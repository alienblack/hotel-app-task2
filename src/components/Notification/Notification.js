import React, { useEffect, useState } from "react";
import "./Notification.css";

const Notification = ({ message, type, onclose, notificationVisible }) => {
  return (
    <div
      className={`notification ${type} ${notificationVisible ? "visible" : ""}`}
    >
      <div className="message success">{message}</div>
      <button
        className="close-btn"
        onClick={() => {
          onclose();
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;

// import { Alert } from "react-bootstrap";

// const Notification = ({ message, type, visible, handleClose }) => {
//   return (
//     <Alert
//       variant={type}
//       className={`notification ${visible ? "visible" : ""} fixed-bottom`}
//     >
//       <div className="message">{message}</div>
//       <button className="close-btn" onClick={handleClose}>
//         &times;
//       </button>
//     </Alert>
//   );
// };

// export default Notification;

// import { Alert } from "react-bootstrap";
// import { useState, useEffect } from "react";

// const Notification = ({ message, type, visible, setVisible }) => {
//   useEffect(() => {
//     let timeout;

//     if (visible) {
//       timeout = setTimeout(() => {
//         setVisible(false);
//       }, 2000);
//     }

//     return () => clearTimeout(timeout);
//   }, [visible, setVisible]);

//   return (
//     <Alert
//       variant={type}
//       className={`notification ${visible ? "visible" : ""} fixed-bottom`}
//     >
//       <div className="message">{message}</div>
//     </Alert>
//   );
// };

// export default Notification;

// import { useEffect } from "react";
// import "./Notification.css"; // Make sure you have a Notification.css file

// const Notification = ({ message, type }) => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       document.getElementById("notification").style.display = "none";
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div id="notification" className={`notification ${type}`}>
//       <div className="message">{message}</div>
//     </div>
//   );
// };

// export default Notification;
