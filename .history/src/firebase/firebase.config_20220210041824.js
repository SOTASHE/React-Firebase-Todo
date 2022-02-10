// Using firebase9
//Import the functions I need from the SDKs I need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

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

// Initialize services/ db/ store
const store = getFirestore(app)
export default store

//collection ref
const colRef = collection(store,'tasks')
export default colRef

