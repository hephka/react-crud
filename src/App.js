import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import Main from "./components/Main";
import firebase from "./utils/firebaseConfig";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log(user);
    });
  }, []);

  return (
    <div className="app" style={{ textAlign: "center" }}>
      {isSignedIn ? (
        <Main />
      ) : (
        <div className="login-page">
          <h1>React Crud</h1>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  );
};

export default App;
