import '/public/CSS/theme.css';
import { 
    hideLoginError, 
    showLoginState, 
    showLoginForm, 
    showApp, 
    showLoginError, 
    btnLogin,
    btnSignup,
    btnLogout
  } from './ui'

// import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBVTT9A6wUiorP4IeClKMeGkyhS-at7Lg8",
    authDomain: "cuengenv.firebaseapp.com",
    projectId: "cuengenv",
    storageBucket: "cuengenv.appspot.com",
    messagingSenderId: "824892336924",
    appId: "1:824892336924:web:a2d9723b09eef4ef0528d9",
    measurementId: "G-4RM7BHDCC9"
  });

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");
// const db = getAuth(firebaseApp);
// const todosCol = collection(db, "todos");
// const snapshot = await getDocs(todosCol);

const loginEmailPassword = async () => {
    const loginEmail = txtEmal.value;
    const loginPassword = txtPassword.value;

    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
}

btnLogin.addEventListener("click", loginEmailPassword);

// ตรวจสอบสิทธิ์การเข้าถึง
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("เข้าสู่ระบบแล้ว");
    } else {
        console.log("ไม่มีสิทธิ์");
    }
});

console.log("เว็บไซต์นี้ถูกเขียนโดย เทพสิทธิ์ เหลืองศิริธัญญะ");