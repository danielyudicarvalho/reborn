
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'blaze-reborn',
  appId: '1:686846690747:web:cad3b52dbf93919aa9309e',
  storageBucket: 'blaze-reborn.firebasestorage.app',
  apiKey: 'AIzaSyBFUEcvLyZIPrTO3R6-es3c6rW3D8RolQk',
  authDomain: 'blaze-reborn.firebaseapp.com',
  messagingSenderId: '686846690747',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
