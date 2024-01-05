import "../CSS/IndexTheme.css";

// import FontEnv from "../FONT/FannieThin.ttf"

import { 
  // SignInBTN,
  SignOutBTN,
  ShowRegister,
  } from './ui.js'


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
    Timestamp,
    onSnapshot } from "firebase/firestore";
  
import {
    LogOut,
    MonitorAuthState,
    } from './BasicFunction.js'

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
const ตัวตน = getAuth();
const ติดต่อฐานข้อมูล = getFirestore();
ตัวตน.languageCode = 'th';

// connectAuthEmulator(auth, "http://localhost:9099");
// const db = getAuth(firebaseApp);
// const todosCol = collection(db, "todos");
// const snapshot = await getDocs(todosCol);
// const provider = new GoogleAuthProvider();
var ProfileData, LevelData
var MyFirstName, MyLastName, MyPhone, MyBirthday

/* global bootstrap: false */
(() => {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

// จัดการฐานข้อมูล
const UserCollection = collection(ติดต่อฐานข้อมูล, "ข้อมูลส่วนตัว");

const AddNewUser = async (AddUID, AddName, AddTel, AddBirthDay) => {
    const NewDoc = await addDoc(UserCollection, {
        ชื่อ_นามสกุล : AddName,
        หมายเลขโทรศัพท์ : AddTel,
        วันเดือนปีเกิด : AddBirthDay
    });
    console.log(`ผู้ใช้งานใหม่เพิ่มที่ ${NewDoc.path}`);
}

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

// !เพิ่มข้อมูลส่วนตัว

const AddAdmin = async () => {
  const TempData = {
    ชื่อตัว : MyFirstName,
    นามสกุล : MyLastName,
    หมายเลขโทรศัพท์ : MyPhone,
    วันเดือนปีเกิด : Timestamp.fromDate(new Date(MyBirthday)),
    เลขประจำตัวบัญชี : ProfileData.uid, 
    สถานภาพ : LevelData
  };
  console.log(LevelData)
  const UserData = doc(ติดต่อฐานข้อมูล, "ข้อมูลส่วนตัว", ProfileData.uid)
  setDoc(UserData, TempData, {merge: true})
  .then( () =>{
      console.log("อัปเดตข้อมูลเรียบร้อยแล้วน้า");
      QueryForDocument()
  })
  .catch( (error) =>{
      console.log(`มีข้อผิดพลาด ${error} เกิดขึ้น`);
  });
}

// Monitor auth state
// *ตรวจสอบสิทธิ์การเข้าถึง
const monitorAuthState = async () => {
  onAuthStateChanged(ตัวตน, user => {
    if (user){
      LevelData = user.email.split("@")[1]
      if (LevelData == "student.chula.ac.th"){
        LevelData = "นิสิต"
      } else if (LevelData == ".chula.ac.th"){
        LevelData = "เจ้าหน้าที่"
      } else {
        LevelData = "บุคคลภายนอก"
      }
      ShowRegister(LevelData, user)
      ProfileData = user
    }
    else{
      console.log(user)
      sessionStorage.clear()
      GoToLogin()
      console.log("ไม่มีสิทธิ์");
    }
  });
}
monitorAuthState();
console.log("เว็บไซต์นี้เขียนโดยเทพสิทธิ์ เหลืองศิริธัญญะ");



const MyReForm = document.getElementById("RegisterMyProfile")
MyReForm.addEventListener("submit", (e) => {
  e.preventDefault();

  MyFirstName = document.getElementById("FirstNameInPut").value
  MyLastName = document.getElementById("LastNameInPut").value
  MyPhone = document.getElementById("PhoneInPut").value
  MyBirthday = document.getElementById("BirthInPut").value

  AddAdmin()
})

const Submited = async () => {
  await console.log(document.getElementById("RegisterMyProfile"))
  alert("The form was submitted");
}

// !ย้ายไปหน้าข้อมูลส่วนตัว
const GoToProfilePage = async () => {
  location.href = "Profile.html"
}

// !ดูว่าลงทะเบียนสำเร็จไหม
const QueryForDocument = async () => {
  const UserOrdersQuery = query(
    collection(ติดต่อฐานข้อมูล, "ข้อมูลส่วนตัว"),
    where("เลขประจำตัวบัญชี", "==", ProfileData.uid),
    // orderBy("GPX"),
    limit(3)
  );
  console.log(ProfileData)
  onSnapshot(UserOrdersQuery, (MyQuerySnapShot) => {
    // console.log(JSON.stringify(MyQuerySnapShot.docs.map((e) => e.data())));
    if (MyQuerySnapShot.docs.length != 0){
      GoToProfilePage()
    } else {
      console.log("โปรดลงทะเบียนเข้าใช้งานครั้งแรกก่อน");
    } 
  });
}