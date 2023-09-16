import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Card.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaStar } from "react-icons/fa";

export default function Card({
  ele,
  isSelected,
  onClick,
  onCard,
  onBookNow,
  handleShowNotification,
}) {
  const handleCardClick = () => {
    // Toggle the card's expanded state when it's clicked
    onCard(ele.id);
  };

  return (
    <div className="custom-card">
      <MDBCard border={isSelected ? "2px solid blue" : "2px solid #ccc"} style={{ padding: "20px" }}>
        <MDBCardTitle style={{ textAlign: "center" }}>{ele.name}</MDBCardTitle>
        <MDBCardImage
          src={ele.images[0]}
          position="top"
          width={100}
          height={200}
          alt="..."
          onClick={onClick}
          style={{
            padding: "10px",
            margin: "10px",
          }}
        />

        {isSelected && (
          <div>
            {ele.reviews.map((review, index) => (
              <p key={index}>
                <strong>User: </strong> {review.user}<br />
                <strong>Rating: </strong> {review.rating}<br />
                <strong>Comment: </strong> {review.comment}<br />
              </p>
            ))}
          </div>
        )}

        <MDBCardBody>
          <div className="row">
            <div className="col-md-6 mb-2">
              <MDBCardText>{ele.city}</MDBCardText>
            </div>
            <div className="col-md-6 mb-2">
              <div className="d-flex justify-content-md-end">
                {[...Array(ele.star)].map((_, index) => (
                  <FaStar key={index} color="#FFD700" size={12} />
                ))}
              </div>
            </div>
            <div className="col-md-12">
              <MDBBtn
                onClick={() => {
                  onBookNow();
                  handleShowNotification();
                }}
              >
                Book Now
              </MDBBtn>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
