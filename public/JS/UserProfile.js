import "../CSS/IndexTheme.css";

// import FontEnv from "../FONT/FannieThin.ttf"

import { 
  SignOutBTN,
  } from './ui.js'

// const MyCustomFont = new FontFace("VarCustomFont", `url(${FontEnv})`);
// MyCustomFont.load().then((F0nt) => {
//   document.fonts.add(F0nt);
//   appContainer.style.fontFamily = "VarCustomFont";
// });

import {
  LogOut,
  MonitorAuthState,
  QueryForDocument,
  } from './BasicFunction.js'
  
import { 
    getFirestore,
    } from "firebase/firestore";
  
const ติดต่อฐานข้อมูล = getFirestore();

// *Log out
SignOutBTN.addEventListener("click", LogOut)

// Monitor auth state
// *ตรวจสอบสิทธิ์การเข้าถึง
var เลข = MonitorAuthState()
const เลขผู้ใช้ = sessionStorage.getItem("เลขผู้ใช้") 
var ข้อมูลส่วนบุคคล = QueryForDocument(ติดต่อฐานข้อมูล, เลขผู้ใช้)
console.log(เลข)
console.log(ข้อมูลส่วนบุคคล)
// ShowUserProfile(ข้อมูลส่วนบุคคล)

console.log("เว็บไซต์นี้เขียนโดยเทพสิทธิ์ เหลืองศิริธัญญะ")