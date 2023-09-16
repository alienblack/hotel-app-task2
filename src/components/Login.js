import React from "react";
import { signInwithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

function handleClick() {
  console.log("Button clicked!");
}

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInwithGoogle()
      .then((res) => {
        const name = res.user.displayName;
        const email = res.user.email;
        const profPic = res.user.photoURL;
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("profPic", JSON.stringify(profPic));

        navigate("/home");
        // Navigate or perform any other actions here
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <form>
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", backgroundColor: "black" }}
      >
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Log In
                </p>

                <MDBBtn
                  className="mb-2 w-100"
                  size="lg"
                  style={{ backgroundColor: "black" }}
                  //   onClick={signInwithGoogle}
                  onClick={handleGoogleSignIn}
                >
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://i.pcmag.com/imagery/articles/01eGstfLC8DcJFtCbjOVe69-12.fit_lim.size_1600x900.v1623096915.jpg"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Login;
