import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebase } from "../firebase/firebaseConfig";
import JournalScreen from "../components/Journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Loader from "../components/ui/Loader";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [Cheking, setCheking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setisLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setisLoggedIn(false);
      }

      setCheking(false);
    });
  }, [dispatch, setCheking, setisLoggedIn]);

  if (Cheking) {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRoute>
                <AuthRouter />
              </PublicRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <JournalScreen />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<Navigate replace to={"/auth/login"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
