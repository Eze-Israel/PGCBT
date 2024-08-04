import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAX3HlEG5t0tILdLHdUBvUZK3HSmDzXSuI",
  authDomain: "full-app-project-af52d.firebaseapp.com",
  projectId: "full-app-project-af52d",
  storageBucket: "full-app-project-af52d.appspot.com",
  messagingSenderId: "163653819029",
  appId: "1:163653819029:web:bad0d78ce69fd4e346599c",
  measurementId: "G-1D01R2VTM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
