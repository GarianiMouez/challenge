import React, { useState, useRef, useEffect } from "react";
import "./login.css";
import { LoginUser } from "../../services/authentificationService";

const Login = (props) => {
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, SetErrMsg] = useState();
  const [success, setSuccess] = useState();

  let [authMode, setAuthMode] = useState("signin");
  let [loginAsAdmin, setLoginAsAdmin] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeLoginToSingIn = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  const login = async (event) => {
    event.preventDefault();
    try {
      let response = await LoginUser(email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={login}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeLoginToSingIn}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeLoginToSingIn}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First name</label>
            <input
              type="firstName"
              className="form-control mt-1"
              placeholder="First Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last name</label>
            <input
              type="lastName"
              className="form-control mt-1"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
