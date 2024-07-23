import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyBINEZoaIP5OCrDGyIJjMa-qaOSP8pQ9gA",
  authDomain: "usdt-api.firebaseapp.com",
  projectId: "usdt-api",
  storageBucket: "usdt-api.appspot.com",
  messagingSenderId: "449090736198",
  appId: "1:449090736198:web:1b70c04f72cb60654afa47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
