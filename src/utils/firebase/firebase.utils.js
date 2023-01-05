import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';
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

 export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
   if (!userAuth) return;

   const userDocRef = doc(db, 'users', userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);

   if (!userSnapshot.exists()) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
       await setDoc(userDocRef, { 
         displayName, 
         email, 
         createdAt,
         ...additionalInfo,
      });
     } catch (error) {
       console.log('error creating the user', error.message);
     }
   }
   return userDocRef;
 };

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
 };

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
 }

 export const signOutUser = async () => await signOut(auth);