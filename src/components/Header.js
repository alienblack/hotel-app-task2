import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

// import img from "../assests";
// import SearchBar from "./SearchBar";

function Header() {
  // logout..
  let navigate = useNavigate();
  const logout = async () => {
    console.log("logout button (frontend)");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("profPic");
    navigate("/");
  };

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "grey" }}
      variant="dark"
    >
      <Container>
        {/* <img
          src={img}
          alt="Hotel Image"
          width="40"
          height="50"
          style={{ marginRight: "30px" }}
        /> */}
        <Navbar.Brand href="#home">Hotel Booking</Navbar.Brand>
        {/* <Nav.Link href="/faq">FAQ</Nav.Link>
        <Nav.Link href="/contactus">Contact Us</Nav.Link> */}

        {/* search bar */}

        {/* <SearchBar /> */}

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
        >
          <i className="fa fa-bars" style={{ color: "black" }}></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <button
              type="button"
              className="btn btn-info btn-sm d-none d-lg-inline rounded-circle"
              onClick={() => navigate("/home")} // Navigate to home page
            >
              {localStorage.getItem("name")[1].toUpperCase()}
            </button>
            {/* <img
              src={localStorage.getItem("profPic")}
              alt="Profile"
              width="30"
              height="30"
              className="rounded-circle"
            /> */}
            <button
              type="button"
              className="btn btn-light btn-sm ms-2"
              onClick={() => logout()}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
