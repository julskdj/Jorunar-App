import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JournalScreen from "../components/Journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route  path="/"  component={JournalScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
