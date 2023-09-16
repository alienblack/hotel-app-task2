import React from "react";
import Card from "./Card/Card";
// import axios from "axios";
import { useState, useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
import Grid from "@mui/material/Grid";
// import { getAllHotels } from "../services/api";
// import { FaStar } from "react-icons/fa";
import Notification from "./Notification/Notification";
// import CardModal from "./CardModel";
// import SearchBar from "./SearchBar";
import "./CardLayout.css";
import hotels from "../database";

export const CardLayout = ({ BlurFilter, modalVisible }) => {
  //   console.log(hotels, "hotels");
  //   const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingHotel, setBookingHotel] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [sHotel, setsHotel] = useState(null);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBookNow = (hotel) => {
    setBookingHotel(hotel);

    // setNotificationVisible(true);
    // Show a success notification
    // NotificationManager.success(
    //   `${hotel.name} has been booked!`,
    //   "Booking Successful"
    // );

    // // Set the booked hotel for displaying the alert
    // setBookingHotel(hotel);
  };

  const handleCardClick = (hotelId) => {
    setSelectedHotel(hotelId);
    // BlurFilter(true);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  const handleClick = (hotelId) => {
    if (selectedHotel === hotelId) {
      setsHotel(null);
    } else {
      setsHotel(hotelId);
    }
  };

  //   const handleShowNotification = () => {
  //     setNotificationVisible(true);

  //     setTimeout(() => {
  //       setNotificationVisible(false);
  //     }, 2000);
  //   };

  //   useEffect(() => {
  //     const getHotels = async () => {
  //       const response = await getAllHotels();
  //       //   console.log(response.data, "response");
  //       setHotels(response.data);
  //       setData(response.data);
  //     };
  //     getHotels();
  //   }, []);

  useEffect(() => {
    setData(hotels);
  }, []);

  const handleQuery = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    const arr = hotels?.filter((hotel) => {
      if (e.target.value === "") return hotel;
      return hotel?.name?.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setData(arr);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#3D4454",
          borderRadius: "25px",
          padding: "5px 10px",
          marginTop: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search for a hotel..."
          value={searchQuery}
          onChange={(e) => handleQuery(e)}
          style={{
            flex: "1",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />
        <i
          className="fa fa-search text-white"
          style={{ fontSize: "20px", marginLeft: "10px" }}
        ></i>
      </div>

      <Grid container spacing={2} sx={{ pt: 2, pl: 2, pr: 2 }}>
        {data.map((ele, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} > {/* Adjust the grid layout here */}
            <Card
              ele={ele}
              isSelected={ele.id === selectedHotel}
              onClick={() => handleCardClick(ele.id)}
              onBookNow={() => handleBookNow(ele)}
              handleShowNotification={() => setNotificationVisible(true)}
              // Add styles to your card here
              style={{
                backgroundColor: "#007fff",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        ))}
      </Grid>

      {notificationVisible && (
        <>
          <Notification
            message={`Booking done for ${bookingHotel.name}`}
            // message="This is a success notification!"
            type="success"
            onclose={() => setNotificationVisible(false)}
            notificationVisible={notificationVisible}
            // bookingHotel={bookingHotel}
            // visible={notificationVisible}
            // setVisible={setNotificationVisible}
          />
        </>
      )}

      {/* {selectedHotel && (
          <CardModal
            ele={hotels.find((ele) => ele.id === selectedHotel)}
            // onClose={handleCloseModal}
            onClose={() => {
              setSelectedHotel(null);
              BlurFilter(false); // Set blurred to false when modal is closed
            }}
          />
        )} */}
    </>
  );
};
