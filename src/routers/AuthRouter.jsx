import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
