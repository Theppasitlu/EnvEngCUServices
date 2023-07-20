import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initalizeApp({
    apiKey: "AIzaSyBVTT9A6wUiorP4IeClKMeGkyhS-at7Lg8",
    authDomain: "cuengenv.firebaseapp.com",
    projectId: "cuengenv",
    storageBucket: "cuengenv.appspot.com",
    messagingSenderId: "824892336924",
    appId: "1:824892336924:web:a2d9723b09eef4ef0528d9",
    measurementId: "G-4RM7BHDCC9"
  });

const auth = getAuth(firebaseApp);
// const db = getAuth(firebaseApp);
// const todosCol = collection(db, "todos");
// const snapshot = await getDocs(todosCol);

// ตรวจสอบสิทธิ์การเข้าถึง
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("เข้าสู่ระบบแล้ว");
    } else {
        console.log("ไม่มีสิทธิ์");
    }
});

console.log("สวัสดีครับ");