import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBOBwLIK5zjRrFR9IDw__jUC6Ikq7uW4x4",
  authDomain: "netfligpt-36e6d.firebaseapp.com",
  projectId: "netfligpt-36e6d",
  storageBucket: "netfligpt-36e6d.firebasestorage.app",
  messagingSenderId: "266678991275",
  appId: "1:266678991275:web:1c7b3c1df48c481dbcbaee",
  measurementId: "G-HZ2RBMWG6N",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
