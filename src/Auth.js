import React, { Component } from "react";
import "./App.css";

import firebase from "firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "  AIzaSyAjSRy3TtXjpON7pO1F7MYhVxb6m644qEw",
  authDomain: "patron-b11e8.firebaseapp.com"
});

class Auth extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
      
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Sithija Shehara</h1>
        {this.state.isSignedIn ? (
          <div>
            Signed In!
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
          </div>
        ) : (
          <StyleFirebaseAuth
            className="SocialButtons"
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Auth;
