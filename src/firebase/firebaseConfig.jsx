import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjukcnyChdGb3zbJkuMQu_qDMqdO_pcGY",
  authDomain: "redux-curso-50121.firebaseapp.com",
  projectId: "redux-curso-50121",
  storageBucket: "redux-curso-50121.appspot.com",
  messagingSenderId: "60709189193",
  appId: "1:60709189193:web:1edcf9483b4d3c30203198",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
