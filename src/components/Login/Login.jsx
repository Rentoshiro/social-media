import React from "react";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Navigate to={"/profile"}></Navigate>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;