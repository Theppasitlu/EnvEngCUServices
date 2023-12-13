import { AuthErrorCodes } from 'firebase/auth';
import { 
  // getFirestore,
  // doc,
  // setDoc,
  // getDoc,
  collection,
  // addDoc,
  query,
  where,
  // orderBy,
  limit,
  onSnapshot } from "firebase/firestore";

export const SignInBTN = document.querySelector('#SignInButton')
export const SignOutBTN = document.querySelector('#SignOutButton')
export const SignOutBan = document.querySelector('#SignOutBanner')

export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export const showLoginForm = () => {
  login.style.display = 'block'
  app.style.display = 'none'  
}

export const showApp = () => {
  login.style.display = 'none'
  app.style.display = 'block'
}

export const hideLoginError = () => {
  divLoginError.style.display = 'none'
  lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
  divLoginError.style.display = 'block'    
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
  }
  else {
    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      
  }
}

const GoToRegiser = () => {
  location.href = "Register.html"
}

export const showLoginData = (User) => {
  lblAuthName.innerHTML = `${User.displayName} `
  lblAuthUID.innerHTML = `${User.uid}`
  lblAuthEmail.innerHTML = `${User.email}`
  lblAuthLast.innerHTML = `${User.metadata.lastSignInTime}`
  lblAuthPicture.innerHTML = `<img src=${User.photoURL}>`

}

export const QueryForDocument = async (GetFireStoreNa, UserID) => {
  const UserOrdersQuery = query(
    collection(GetFireStoreNa, "ข้อมูลส่วนตัว"),
    where("เลขประจำตัวบัญชี", "==", UserID),
    // orderBy("GPX"),
    limit(3)
  );

  onSnapshot(UserOrdersQuery, (MyQuerySnapShot) => {
    // console.log(JSON.stringify(MyQuerySnapShot.docs.map((e) => e.data())));
    if (MyQuerySnapShot.docs.length != 0){
      MyQuerySnapShot.forEach((Snap) => {
        const SnapShotData = Snap.data()
        lblTelephone.innerHTML = SnapShotData.หมายเลขโทรศัพท์
        lblGPAX.innerHTML = SnapShotData.เกรดเฉลี่ยสะสม
        console.log(`เอกสาร ${Snap.id} บรรจุ ${JSON.stringify(SnapShotData)}`);
      });
    } else {
      console.log("โปรดลงทะเบียนเข้าใช้งานครั้งแรกก่อน");
      GoToRegiser();
    } 
  });
}


// hideLoginError()