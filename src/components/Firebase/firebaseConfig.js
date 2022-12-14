import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
require('dotenv').config()

const firebaseConfig = {

    apiKey: process.env.APP_ID,
  
    authDomain: process.env.AUTH_DOMAIN,
    
    projectId: process.env.PROJECT_ID,
  
    storageBucket: process.env.STORAGE_BUCKET,
  
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
  
    appId: process.env.APP_ID
  
  };
  
  const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)   