import "../CSS/IndexTheme.css";

// import FontEnv from "../FONT/FannieThin.ttf"

import { 
  SignOutBTN,
  } from './ui.js'

import {
  LogOut,
  MonitorAuthState,
  QueryForDocument
  } from './BasicFunction.js'

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

const ติดต่อฐานข้อมูล = getFirestore();

// *Log out
SignOutBTN.addEventListener("click", LogOut)

// *ตรวจสอบสิทธิ์การเข้าถึง
MonitorAuthState()
console.log(MonitorAuthState())
const เลขผู้ใช้ = sessionStorage.getItem("เลขผู้ใช้") 
var ข้อมูลส่วนบุคคล = QueryForDocument(ติดต่อฐานข้อมูล, เลขผู้ใช้)
console.log("เว็บไซต์นี้เขียนโดยเทพสิทธิ์ เหลืองศิริธัญญะ");