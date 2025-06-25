// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATD5Zzz1mOcI9_QlPlnm8w4K8MLssPc9c",
  authDomain: "rt-db-crud.firebaseapp.com",
  databaseURL: "https://rt-db-crud-default-rtdb.firebaseio.com",
  projectId: "rt-db-crud",
  storageBucket: "rt-db-crud.firebasestorage.app",
  messagingSenderId: "468263081590",
  appId: "1:468263081590:web:98018f687e0733fd5f3157",
  measurementId: "G-8D2VGD5BYC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);