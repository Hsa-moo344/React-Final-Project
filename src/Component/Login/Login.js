import React from "react";
import ProjectCss from "../../css/common.module.css";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

const Login = () => {
  const [username, setusername] = useState("");
  const usernameHandleChange = (event) => {
    setusername(event.target.value);
  };
  const [useremail, setemail] = useState("");
  const useremailHandleChange = (event) => {
    setemail(event.target.value);
  };
  const [userpassword, setpassword] = useState("");
  const userpasswordHandleChange = (event) => {
    setpassword(event.target.value);
  };
  const [Error, setError] = useState("");
  const handleLogin = () => {
    var tbl_user = [
      {
        username: "hsamoo",
        useremail: "hsamoo@gmail.com",
        userpassword: "123456",
      },
    ];
    for (var i = 0; i < tbl_user.length; i++) {
      if (username == tbl_user[i].username) {
        if (userpassword == tbl_user[i].userpassword) {
          alert("Successful login");
          setError("");
          break;
        } else {
          setError("Password does not match");
          break;
        }
      } else {
        setError("User not found");
      }
    }
  };
  return (
    <div className={ProjectCss.loginFooter}>
      <Navigation />
      <h1>Login Form</h1>
      <input
        type="text"
        onChange={(e) => usernameHandleChange(e)}
        placeholder="write your name here"
        required
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => useremailHandleChange(e)}
        placeholder="write your email"
        required
      />
      <br />
      <br />
      <input
        type="password"
        onChange={(e) => userpasswordHandleChange(e)}
        placeholder="your password"
        required
      />
      <p>Forget Password?</p>
      <p style={{ color: "red" }}>{Error}</p>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account register?</p>
    </div>
  );
};
export default Login;
