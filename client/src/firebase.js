import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "mernauth-c7083.firebaseapp.com",
  projectId: "mernauth-c7083",
  storageBucket: "mernauth-c7083.appspot.com",
  messagingSenderId: "513600637920",
  appId: "1:513600637920:web:35c1839ea57cbf1430f985"
};

export const app = initializeApp(firebaseConfig);
