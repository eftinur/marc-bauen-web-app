// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbYmMQiK7PKWzgKpwXdwygmBW0-tYXzQ",
  authDomain: "marc-bauen.firebaseapp.com",
  projectId: "marc-bauen",
  storageBucket: "marc-bauen.appspot.com",
  messagingSenderId: "826431794829",
  appId: "1:826431794829:web:96f4b640085bb51a1cfcc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;