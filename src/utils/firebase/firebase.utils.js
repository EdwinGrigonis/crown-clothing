import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'; 
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log('error creating the user ', error);
      }
    }

   return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => await signOut(auth);