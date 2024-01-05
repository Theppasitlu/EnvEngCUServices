import "../CSS/IndexTheme.css";

// import FontEnv from "../FONT/FannieThin.ttf"

import { 
  SignOutBTN,
  showLoginData,
  QueryForDocument } from './ui.js'

import { initializeApp } from "firebase/app";
import { 
    getAuth,
    onAuthStateChanged, 
    signOut,
    GoogleAuthProvider, 
    } from "firebase/auth";
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
const Auth = getAuth();
const FireStore = getFirestore();
Auth.languageCode = 'th';

// *Log out
const logout = async () => {
  await signOut(Auth).then(() => {
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

// *ตรวจสอบสิทธิ์การเข้าถึง
const monitorAuthState = async () => {
  onAuthStateChanged(Auth, user => {
    if (user){
      console.log(user)
      QueryForDocument(FireStore, user.uid)
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