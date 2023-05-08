import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9zcgQUXPfEAB1xdIVvMBg-CI25Fr0pgU",
  authDomain: "ecommerce-test-6c671.firebaseapp.com",
  projectId: "ecommerce-test-6c671",
  storageBucket: "ecommerce-test-6c671.appspot.com",
  messagingSenderId: "212451147391",
  appId: "1:212451147391:web:cf8a849a6a6effc713c94a",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
