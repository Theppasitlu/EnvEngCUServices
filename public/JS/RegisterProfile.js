import "../CSS/IndexTheme.css";

// import FontEnv from "../FONT/FannieThin.ttf"

import { 
  // SignInBTN,
  // SignOutBan,
  SignOutBTN,
  showLoginData,
  // hideLoginError, 
  // showLoginForm, 
  // showApp, 
  // showLoginError,
  showUserData,
  QueryForDocument } from './ui.js'

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
    // signInWithRedirect, 
    // connectAuthEmulator,
    signInWithPopup, } from "firebase/auth";
import { 
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot } from "firebase/firestore";

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
const FireStore = getFirestore();
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

// จัดการฐานข้อมูล
// const UserCollection = collection(FireStore, "ข้อมูลส่วนตัว");

// *Log out
const logout = async () => {
  await signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
SignOutBTN.addEventListener("click", logout)

// *redirect to login page
const GoToLogin = async () => {
  location.href = "index.html"
}

// Monitor auth state
// *ตรวจสอบสิทธิ์การเข้าถึง
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user){
      console.log(user)
      showLoginData(user)

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
console.log("เว็บไซต์นี้เขียนโดยเทพสิทธิ์ เหลืองศิริธัญญะ");

const MyReForm = document.getElementById("RegisterMyProfile")
MyReForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const MyFirstName = document.getElementById("FirstNameInPut")
  const MyLastName = document.getElementById("LastNameInPut")
  const MyPhone = document.getElementById("PhoneInPut")

  console.log(MyFirstName.value)

})

const Submited = async () => {
  await console.log(document.getElementById("RegisterMyProfile"))
  alert("The form was submitted");
}