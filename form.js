import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDzK4AIQDOr5WerI24ZWvWYJR9jNXgRXAc",
  authDomain: "auth-b173e.firebaseapp.com",
  projectId: "auth-b173e",
  storageBucket: "auth-b173e.firebasestorage.app",
  messagingSenderId: "82794919027",
  appId: "1:82794919027:web:65fc0172ab1aabc9a5e606",
  measurementId: "G-G61NK923NK"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const submit = document.getElementById("submit");
 submit.addEventListener("click", function (event){
  event.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("Logged-in user email:", user.email);

    localStorage.setItem("userEmail", user.email); 
  
Swal.fire({
  title: 'Login Successful',
  icon: 'success',
  text: 'Welcome! You are logged in.',
  confirmButtonText: 'Continue'
}).then(() => {
  window.location.href = "index.html";
});

}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;

  Swal.fire({
    title: 'Error!',
    text: errorMessage,
    icon: 'error',
    confirmButtonText: 'OK'
  });
});
})