import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import Register from "./Register/Register";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login  />}></Route>

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<HomePage  />}>
            {/* {user && user._id ? <HomePage /> : <Login  />} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
