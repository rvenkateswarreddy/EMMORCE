// Login.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div className="logindivider">
        <div className="transfer">
          <Link to="login1">Login 1</Link>
          <Link to="login2">Login 2</Link>
        </div>

        <div className="divide">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Login;
