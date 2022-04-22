import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import notesReducer from "../reducers/notesReducer";
import uiReducer from "../reducers/uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
