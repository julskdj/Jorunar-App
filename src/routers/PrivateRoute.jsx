import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const state = useSelector((state) => state.auth);

  return state.uid ? children : <Navigate to={"/auth/login"} />;
};

export default PrivateRoute;
