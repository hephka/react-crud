import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCKEthPCo6l98NDMU1aov2oWrAzAkHmb0",
  // auth
  authDomain: "react-auth-23130.firebaseapp.com",
  projectId: "react-auth-23130",
  storageBucket: "react-auth-23130.appspot.com",
  messagingSenderId: "142250096480",
  appId: "1:142250096480:web:a10d2dd6d53b299a74d005",
  measurementId: "G-ZC8GJBTY09",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();

export default firebase;
