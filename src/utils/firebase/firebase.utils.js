import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyBWzrUmN9RLTyakEUmzH7UWpQJQMBPTJ4M",
    authDomain: "crown-clothing-db-70f64.firebaseapp.com",
    projectId: "crown-clothing-db-70f64",
    storageBucket: "crown-clothing-db-70f64.appspot.com",
    messagingSenderId: "3824137144",
    appId: "1:3824137144:web:68596919ee4c2af9c8554d"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);