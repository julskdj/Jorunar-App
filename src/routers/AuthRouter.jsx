import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route  path="/auth/login" element={LoginScreen}  />
        <Route  path="/auth/register" element={RegisterScreen}  />

        <Redirect to="/auth/register" />
      </Switch>
    </> 
  );
};

export default AuthRouter;
