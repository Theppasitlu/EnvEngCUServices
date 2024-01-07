import { initializeApp } from "firebase/app";
import { 
    getAuth,
    onAuthStateChanged, 
    signOut,
    // GoogleAuthProvider, 
    } from "firebase/auth";
import { 
    collection,
    query,
    where,
    // orderBy,
    limit,
    onSnapshot } from "firebase/firestore";
import {
    ShowProfilePic,
    } from './ui.js'
    

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
const ประจำตัวตน = getAuth();
const เลขของผู้ใช้ = ประจำตัวตน.currentUser;
ประจำตัวตน.languageCode = 'th';

console.log(เลขของผู้ใช้)
console.log(ประจำตัวตน)

export const LogOut = async () => {
  await signOut(ประจำตัวตน).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

const GoToLogin = async () => {
  location.href = "index.html"
}


export const MonitorAuthState = async () => {
  var เลขของผู้ใช้
  console.log(เลขของผู้ใช้)
  onAuthStateChanged(ประจำตัวตน, ผู้ใช้นะ => {
    if (ผู้ใช้นะ){
      ShowProfilePic(ผู้ใช้นะ)
      เลขของผู้ใช้ = ผู้ใช้นะ.uid
      console.log(เลขของผู้ใช้)
      sessionStorage.setItem("เลขผู้ใช้", เลขของผู้ใช้)
      // showApp()
      // hideLoginError()
      // hideLinkError()
    }
    else{
      // showLoginForm()
      GoToLogin()
      console.log("ไม่มีสิทธิ์");
      // lblAuthState.innerHTML = `You're not logged in. นะครับ`
    }
  });
  console.log(เลขของผู้ใช้)
}

export const MonitorAuthRegister = async () => {
  onAuthStateChanged(ประจำตัวตน, ผู้ใช้นะ => {
    if (ผู้ใช้นะ){
      ShowProfilePic(ผู้ใช้นะ)
      const Hello = ผู้ใช้นะ.uid
      console.log(ผู้ใช้นะ.uid)
      sessionStorage.setItem("เลขผู้ใช้", Hello)
      // showApp()
      // hideLoginError()
      // hideLinkError()
    }
    else{
      // showLoginForm()
      GoToLogin()
      console.log("ไม่มีสิทธิ์");
      // lblAuthState.innerHTML = `You're not logged in. นะครับ`
    }
  });
}

const GoToRegiser = async () => {
  location.href = "Register.html"
}

export const  QueryForDocument = async (ติดต่อฐานข้อมูล, เลขของผู้ใช้) => {
  const ข้อมูลกรอง = query(
    collection(ติดต่อฐานข้อมูล, "ข้อมูลส่วนตัว"),
    where("เลขประจำตัวบัญชี", "==", เลขของผู้ใช้),
    // orderBy("GPX"),
    limit(3)
  );

  onSnapshot(ข้อมูลกรอง, (ล่าสุดที่พบ) => {
    var ข้อมูลล่าสุด
    // console.log(JSON.stringify(MyQuerySnapShot.docs.map((e) => e.data())));
    if (ล่าสุดที่พบ.docs.length != 0){
      ล่าสุดที่พบ.forEach((Snap) => {
        ข้อมูลล่าสุด = Snap.data()
        console.log(ข้อมูลล่าสุด)
        return ข้อมูลล่าสุด
      })
    } else {
      console.log("โปรดลงทะเบียนเข้าใช้งานครั้งแรกก่อน");
      GoToRegiser();
    } 
  });
}


if (ประจำตัวตน.currentUser){
  console.log(ประจำตัวตน.currentUser)
} else {
  console.log("ไม่มีสิทธิ์")
  console.log(ประจำตัวตน)
}

