import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB-9GrJJzyf8HvOHiXV7InsdJvg89bVae0",
    authDomain: "green-delights.firebaseapp.com",
    projectId: "green-delights",
    storageBucket: "green-delights.appspot.com",
    messagingSenderId: "182365987771",
    appId: "1:182365987771:web:3b93475a74fce2d8de1a9e",
    measurementId: "G-MVNH06D6EE"
};
const app = initializeApp(firebaseConfig);
export const GreenDelightsData = getFirestore(app);