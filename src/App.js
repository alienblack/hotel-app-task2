import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { CardLayoutPage } from "./pages/CardLayoutPage";
import { HeaderPage } from "./pages/HeaderPage";
// import CardModal from "./components/CardModel";
// import { useState } from "react";

function App() {
  const ProtectedRoute = ({ children }) => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      return <Navigate to="/" />;
    }

    return children;
  };

  // const [isSelected, setSelected] = useState(false);

  // const handleClose =()=>{

  // }

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        {/* <Header></Header>
         */}
        {/* <Login></Login> */}

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Login />
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              path="/home"
              exact
              element={
                <>
                  <ProtectedRoute>
                    <HeaderPage />
                    <CardLayoutPage />
                    {/* {
                      isSelected &&
                      <div>
                        <CardModal ele={} onClose={handleClose}/>
                      </div>
                    } */}
                  </ProtectedRoute>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
