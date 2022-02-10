// Using firebase9
//Import the functions I need from the SDKs I need
import { initializeApp } from "firebase/app";
import {getFirestore,  collection} from "firebase/firestore"

//Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: "todo-app-fueltofly",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
const store = getFirestore(app)

//collection ref
 const colRef = collection(store, "tasks")

export default store