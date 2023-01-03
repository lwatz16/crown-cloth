import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAM0ahxX3Zc-I4hcH2AfMwGL9ZTWTWIEwY',
  authDomain: 'crown-cloth-db-879d9.firebaseapp.com',
  projectId: 'crown-cloth-db-879d9',
  storageBucket: 'crown-cloth-db-879d9.appspot.com',
  messagingSenderId: '411085236460',
  appId: '1:411085236460:web:d61a7d1bf69105fdcfddc9',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ 
  prompt: "select_account"
 });

 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
 
 // instantiate Firestore database
 export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, 'users', userAuth.uid);

   console.log(userDocRef);

   const userSnapshot = await getDoc(userDocRef);
   console.log(userSnapshot);
   console.log(userSnapshot.exists());

   if (!userSnapshot.exists()) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
       await setDoc(userDocRef, { displayName, email, createdAt });
     } catch (error) {
       console.log('error creating the user', error.message);
     }
   }

   return userDocRef;
 }