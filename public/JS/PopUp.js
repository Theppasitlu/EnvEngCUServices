import "../CSS/IndexTheme.css";

// import FontEnv from "../FONT/FannieThin.ttf"

import { 
  SignInBTN,
  // SignOutBTN,
  // showLoginState,
  // hideLoginError, 
  // showLoginForm, 
  // showApp, 
  // showLoginError, 
  } from './ui.js'


// const MyCustomFont = new FontFace("VarCustomFont", `url(${FontEnv})`);
// MyCustomFont.load().then((F0nt) => {
//   document.fonts.add(F0nt);
//   appContainer.style.fontFamily = "VarCustomFont";
// });

import { initializeApp } from "firebase/app";
import { 
    getAuth,
    onAuthStateChanged, 
    signOut,
    GoogleAuthProvider, 
    signInWithPopup, 
    // signInWithRedirect, 
    // connectAuthEmulator,
    } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVTT9A6wUiorP4IeClKMeGkyhS-at7Lg8",
    authDomain: "cuengenv.firebaseapp.com",
    projectId: "cuengenv",
    storageBucket: "cuengenv.appspot.com",
    messagingSenderId: "824892336924",
    appId: "1:824892336924:web:a2d9723b09eef4ef0528d9",
    measurementId: "G-4RM7BHDCC9"
  };

const firebaseApp = initializeApp(firebaseConfig);
const Auth = getAuth();
Auth.languageCode = 'th';
// connectAuthEmulator(Auth, "http://localhost:9099");
// const db = getAuth(firebaseApp);
// const todosCol = collection(db, "todos");
// const snapshot = await getDocs(todosCol);
const provider = new GoogleAuthProvider();

/* global bootstrap: false */
(() => {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

const InIN = async () => {
  const userCredential = await signInWithPopup(Auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  // console.log(result);
  console.log("สวัสดี");
}
SignInBTN.addEventListener("click", InIN)


// redirect to dashboard page
const GoToDashboard = async () => {
  location.href = "Learn.html"
}

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(Auth, user => {
    if (user){
      console.log(user)

      // showLoginState(user)
      GoToDashboard()

      // showApp()
      // hideLoginError()
      // hideLinkError()
    }
    else{
      // showLoginForm()
      console.log(user)
      
      console.log("ไม่มีสิทธิ์");
      // lblAuthState.innerHTML = `You're not logged in. นะครับ`
    }

  });
}
monitorAuthState();

console.log("สวัสดีครับ");