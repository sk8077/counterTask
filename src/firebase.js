import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADaCEne52Rj4eEjQV7_URpeaAxqii95lg",
  authDomain: "linkedin-eaaa2.firebaseapp.com",
  projectId: "linkedin-eaaa2",
  storageBucket: "linkedin-eaaa2.appspot.com",
  messagingSenderId: "640048561204",
  appId: "1:640048561204:web:3c4f961e8bf0e484c2de61",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
