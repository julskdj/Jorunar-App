import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import useForm from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    name: "Julio",
    email: "Julio225@hotmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("El nombre es requerido"));

      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Favor ingrese un email valido"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "Favor coloque una contraseña de 6 caracteres, y que las dos contraseñas sean iguales"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
