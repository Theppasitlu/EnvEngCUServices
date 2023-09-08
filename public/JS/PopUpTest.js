import '../CSS/theme.css';

import { 
    hideLoginError, 
    showLoginState, 
    showLoginForm, 
    showApp, 
    showLoginError, 
    btnLogin,
    btnSignup,
    btnLogout
  } from './ui.js'

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

const InIN = async () => {
  const userCredential = await signInWithPopup(auth, provider)
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
  console.log(result);
  console.log("สวัสดี");
}
btnUP.addEventListener("click", InIN)

// const ReIn = async () => {
//   signInWithRedirect(auth, provider);
// }

// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

  // Log out
const logout = async () => {
    await signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
  }
btnLogout.addEventListener("click", logout)

// Monitor auth state
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user)
        showApp()
        showLoginState(user)
  
        hideLoginError()
        hideLinkError()
      }
      else {
        showLoginForm()
        lblAuthState.innerHTML = `You're not logged in. นะครับ`
      }
    });
  }
monitorAuthState();

// ตรวจสอบสิทธิ์การเข้าถึง
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("เข้าสู่ระบบแล้ว");
    } else {
        console.log("ไม่มีสิทธิ์");
    }
});

console.log("สวัสดีครับ");