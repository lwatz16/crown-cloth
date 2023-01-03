import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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