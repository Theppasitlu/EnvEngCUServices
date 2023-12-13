import "../CSS/IndexTheme.css";

// import FontEnv from "../FONT/FannieThin.ttf"

import { 
  // SignInBTN,
  SignOutBTN,
  SignOutBan,
  showLoginState,
  // hideLoginError, 
  // showLoginForm, 
  // showApp, 
  // showLoginError, 
  // Hell,
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
import { getFirestore } from "firebase/firestore";

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
const auth = getAuth();
auth.languageCode = 'th';
// connectAuthEmulator(auth, "http://localhost:9099");
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


  // Log out
const logout = async () => {
  await signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
SignOutBTN.addEventListener("click", logout)
SignOutBan.addEventListener("click", logout)

// redirect to login page
const GoToLogin = async () => {
  location.href = "index.html"
}


// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user){
      console.log(user)

      showLoginState(user)

      // showApp()

      // hideLoginError()
      // hideLinkError()
    }
    else{
      // showLoginForm()
      console.log(user)
      

      GoToLogin()
      console.log("ไม่มีสิทธิ์");
      // lblAuthState.innerHTML = `You're not logged in. นะครับ`
    }
  });
}
monitorAuthState();

// ตรวจสอบสิทธิ์การเข้าถึง
// onAuthStateChanged(auth, user => {
//     if(user != null){
//         console.log("เข้าสู่ระบบแล้ว");
//     } else {
//         console.log("ไม่มีสิทธิ์");
//     }
// });

console.log("สวัสดีครับ");