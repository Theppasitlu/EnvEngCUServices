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

// // import { async } from '@firebase/util';
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    onAuthStateChanged, 
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    connectAuthEmulator
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
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");
// const db = getAuth(firebaseApp);
// const todosCol = collection(db, "todos");
// const snapshot = await getDocs(todosCol);

const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
    }
    catch (error) {
        console.log(error);
        showLoginError(error);
        }
}
btnLogin.addEventListener("click", loginEmailPassword);

// Create new account using email/password
const createAccount = async () => {
    const email = txtEmail.value
    const password = txtPassword.value
  
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
    }
    catch(error) {
      console.log(`There was an error: ${error}`)
      showLoginError(error)
    } 
  }
btnSignup.addEventListener("click", createAccount)

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
        lblAuthState.innerHTML = `You're not logged in.`
      }
    });
  }
  
  // Log out
  const logout = async () => {
    await signOut(auth);
  }
btnLogout.addEventListener("click", logout)

monitorAuthState();

// ตรวจสอบสิทธิ์การเข้าถึง
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("เข้าสู่ระบบแล้ว");
    } else {
        console.log("ไม่มีสิทธิ์");
    }
});

console.log("เว็บไซต์นี้ถูกเขียนโดย เทพสิทธิ์ เหลืองศิริธัญญะ");