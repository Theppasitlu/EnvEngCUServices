import { AuthErrorCodes } from 'firebase/auth';

export const SignInBTN = document.querySelector('#SignInButton')
export const SignOutBTN = document.querySelector('#SignOutButton')

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

// export const hideLoginError = () => {
//   divLoginError.style.display = 'none'
//   lblLoginErrorMessage.innerHTML = ''
// }

// export const showLoginError = (error) => {
//   divLoginError.style.display = 'block'    
//   if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
//     lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
//   }
//   else {
//     lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      
//   }
// }

export const showLoginState = (user) => {
  // lblAuthName.innerHTML = `${user.displayName} `
  // lblAuthUID.innerHTML = `${user.uid}`
  // lblAuthEmail.innerHTML = `${user.email}`
  // lblAuthLast.innerHTML = `${user.metadata.lastSignInTime}`
  // lblAuthPicture.innerHTML = `<img src=${user.photoURL}>`
}

// hideLoginError()