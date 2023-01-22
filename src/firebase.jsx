// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgHltZeYYkXJovmGfo21bHbs_IUY_C-Cs",
  authDomain: "realtor-clone-react-9bd91.firebaseapp.com",
  projectId: "realtor-clone-react-9bd91",
  storageBucket: "realtor-clone-react-9bd91.appspot.com",
  messagingSenderId: "329541060813",
  appId: "1:329541060813:web:8ca289d0ae2622035a8184",
  measurementId: "G-K32FMZYXDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()
const analytics = getAnalytics(app);