import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate} from 'react-router-dom'
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange=(e)=>{
    const{name, value} = e.target
    setUser({
      ...user,[name]:value
    })
    // console.log(e.target)
  }

  const navigate= useNavigate()

  const navReg = ()=>{
     navigate("/register")
  }

  const login = ()=>{
    axios.post("http://localhost:8000/login",user)
    .then((res)=>{
      {
        alert(res.data.message)
        // setUser(res.data.user)
      }
    })
  }
  return (
    <>
      <div className="login">
        {console.log("User",user)}
        <h1>Welcome to Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="enter your password"
          onChange={handleChange}
        />
        <div className="button" onClick={login}>Login</div>
        <div>Or</div>
        <div className="button" onClick={navReg}>Register</div>
      </div>
    </>
  );
};

export default Login;
