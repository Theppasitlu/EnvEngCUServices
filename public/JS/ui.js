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

export const ShowRegister = (ระดับ, ผู้ใช้) => {
  lblAuthLevel.innerHTML = `${ระดับ}`
  lblAuthEmail.innerHTML = `${ผู้ใช้.email}`
  lblAuthPicture.innerHTML = `<img src=${ผู้ใช้.photoURL}>`
}

export const ShowProfilePic = (ผู้ใช้) => {
  lblAuthEmail.innerHTML = `${ผู้ใช้.email}`
  lblAuthPicture.innerHTML = `<img src=${ผู้ใช้.photoURL}>`
  // lblAuthUID.innerHTML = `${User.uid}`
  // lblAuthLast.innerHTML = `${User.metadata.lastSignInTime}`
}

export const ShowUserProfile = (ทั้งหมดล่าสุด) => {
  // ทั้งหมดล่าสุด.forEach((Snap) => {
  //   const ข้อมูลล่าสุด = Snap.data()
  //   lblAuthName.innerHTML = `${ข้อมูลล่าสุด.ชื่อตัว}`+` ${ข้อมูลล่าสุด.นามสกุล}`
  //   lblAuthUID.innerHTML = `${ข้อมูลล่าสุด.uid}`
  //   lblTelephone.innerHTML = ข้อมูลล่าสุด.หมายเลขโทรศัพท์
  //   lblGPAX.innerHTML = ข้อมูลล่าสุด.เกรดเฉลี่ยสะสม
  //   // console.log(`เอกสาร ${Snap.id} บรรจุ ${JSON.stringify(SnapShotData)}`);
  // })
    const ข้อมูลล่าสุด = ทั้งหมดล่าสุด.data()
    console.log(ข้อมูลล่าสุด)
    // lblAuthName.innerHTML = `${ข้อมูลล่าสุด.ชื่อตัว}`+` ${ข้อมูลล่าสุด.นามสกุล}`
    // lblAuthUID.innerHTML = `${ข้อมูลล่าสุด.uid}`
    // lblTelephone.innerHTML = ข้อมูลล่าสุด.หมายเลขโทรศัพท์
    // lblGPAX.innerHTML = ข้อมูลล่าสุด.เกรดเฉลี่ยสะสม
    // console.log(`เอกสาร ${Snap.id} บรรจุ ${JSON.stringify(SnapShotData)}`);
}



// hideLoginError()