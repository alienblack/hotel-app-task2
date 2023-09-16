import React, { useState } from "react";
import { CardLayout } from "../components/CardLayout";
import "./CardLayoutPage.css";

// ${notificationVisible ? "visible" : ""}

export const CardLayoutPage = () => {
  //   const [blurred, setblurred] = useState(false);

  //   const [blurred, setBlurred] = useState(false);
  //   const [modalVisible, setModalVisible] = useState(false);

  return (
    // <div style={{ filter: blurred ? "blur(5px)" : "none" }}>
    //   <CardLayout BlurFilter={() => setblurred(true)} />
    // </div>

    <div>
      <CardLayout
      // BlurFilter={(value) => {
      //   setBlurred(value);
      // }}
      // modalVisible={modalVisible}
      />
    </div>
  );
};
