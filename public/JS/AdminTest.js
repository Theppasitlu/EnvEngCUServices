import '../CSS/theme.css';
// import { 
//     hideLoginError, 
//     showLoginState, 
//     showLoginForm, 
//     showApp, 
//     showLoginError, 
//     btnLogin,
//     btnSignup,
//     btnLogout
//   } from './ui.js'

// var admin = require("firebase-admin");
// var serviceAccount = require("./cuengenv-firebase-adminsdk-lcjkt-6afb861236.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


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
    onSnapshot} from "firebase/firestore";

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

// const provider = new GoogleAuthProvider();

// จัดการฐานข้อมูล
const UserData = doc(FireStore, "ข้อมูลส่วนตัว/ทดสอบ")
// const ChidDoc = doc(UserData, "User/Chid")

// !อัปเดตข้อมูล
const AddAdmin = async () => {
  const TempData = {
    ชื่อ_นามสกุล : "name",
    หมายเลขโทรศัพท์ : "หมายเลข",
    เกรดเฉลี่ยสะสม : "5.99",
    Email : "teddytheppasitlu@gmail.com"
  };
//   try {
//     await setDoc(UserData, TempData, {merge: true});
//     console.log("อัปเดตข้อมูลเรียบร้อยแล้วน้า");
//   } catch (error) {
//     console.log("มีข้อผิดพลาด ${error}  เกิดขึ้น");
//   }  
    setDoc(UserData, TempData, {merge: true})
    .then( () =>{
        console.log("อัปเดตข้อมูลเรียบร้อยแล้วน้า");
    })
    .catch( (error) =>{
        console.log(`มีข้อผิดพลาด ${error} เกิดขึ้น`);
    });
}

const UserCollection = collection(FireStore, "ข้อมูลส่วนตัว");
const AddNewUser = async () => {
    const NewDoc = await addDoc(UserCollection, {
        ชื่อ_นามสกุล : "ชื่อ",
        หมายเลขโทรศัพท์ : "หมายเลขโทร",
        เกรดเฉลี่ยสะสม : "5.99",
        Email : "ทดสอบ@gmail.com"
    });
    console.log(`ผู้ใช้งานใหม่เพิ่มที่ ${NewDoc.path}`);
}

const ReadSingleDocument = async () => {
    const MySnapShot = await getDoc(UserData);
    if (MySnapShot.exists()) {
        const UserData = MySnapShot.data();
        console.log(`ข้อมูลของทุกท่านคือ ${JSON.stringify(UserData)}`);
    }
}
const ListenToDocument = async () => {
    onSnapshot(UserData, (MySnapShot) => {
        if (MySnapShot.exists()) {
            const UserData = MySnapShot.data();
            console.log(`ข้อมูลของทุกท่านคือ ${JSON.stringify(UserData)}`);
        }
    });
}

const QueryForDocument = async () => {
    const UserOrdersQuery = query(
        collection(FireStore, "ข้อมูลส่วนตัว"),
        where("Email", "==", "theppasitlu@gmail.com"),
        // orderBy("GPX"),
        limit(100)
    );

    onSnapshot(UserOrdersQuery, (MyQuerySnapShot) => {
        console.log(JSON.stringify(MyQuerySnapShot.docs.map((e) => e.data())));
        // MyQuerySnapShot.forEach((Snap) => {
        //     console.log(`เอกสาร ${Snap.id} บรรจุ ${JSON.stringify(Snap.data())}`);
        // });
    });
}

// AddAdmin();
// AddNewUser();
// ReadSingleDocument();
// ListenToDocument();
QueryForDocument();


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
// btnUP.addEventListener("click", InIN)

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
// btnLogout.addEventListener("click", logout)

// Monitor auth state
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user)
        showApp()
        showLoginState(user)
  
        // hideLoginError()
        // hideLinkError()
      }
      else {
        // showLoginForm()
        // lblAuthState.innerHTML = `You're not logged in. นะครับ`   
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