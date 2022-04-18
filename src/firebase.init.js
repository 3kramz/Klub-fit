// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9yDPIxBWFdqHBtqsIlOHzz2v1DhUsuNk",
  authDomain: "klub-fit.firebaseapp.com",
  projectId: "klub-fit",
  storageBucket: "klub-fit.appspot.com",
  messagingSenderId: "825142048944",
  appId: "1:825142048944:web:5db414b2a4d70c76aee375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;