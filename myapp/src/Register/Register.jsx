import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange=(e)=>{
    const{name, value} = e.target
    setUser({
      ...user,[name]:value
    })
  }

  const register = ()=>{
    const {name, email, password,repassword}= user;

    if(name && email && password && (password === repassword)){
      // alert("sucessfull registerd")
       axios.post("http://localhost:8000/register", user)
       .then((res)=>{
        console.log(res)
       })
    }else{
      alert("not registered")
    }
   
  }

  return (
    <>
      <div className="register">
        {console.log("User", user)}
        <h1>Create Account</h1>
        
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter Your name"
          onChange={handleChange}
       />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="enter your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="enter your password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="repassword"
          value={user.repassword}
          placeholder="re-enter password"
          onChange={handleChange}
        />
        <div className="button" onClick={register}>Register</div>
      </div>
    </>
  );
};

export default Register;
