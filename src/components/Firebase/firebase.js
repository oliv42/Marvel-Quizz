import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyDg4eAb0eF2saUozTCg9qRBcTTg-XnPtIA",
  
    authDomain: "marvel-quiz-25bd9.firebaseapp.com",
    
    projectId: "marvel-quiz-25bd9",
  
    storageBucket: "marvel-quiz-25bd9.appspot.com",
  
    messagingSenderId: "297211980433",
  
    appId: "1:297211980433:web:77aec6f8b2e070c28ead30"
  
  };
  
  const app = initializeApp(firebaseConfig);

 export     const auth = getAuth(app)   