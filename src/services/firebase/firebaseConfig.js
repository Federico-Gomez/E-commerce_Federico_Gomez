
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYZxWfzIRQr-Nhg7wr-3khHBp34Shhvb4",
  authDomain: "ecommerce-bt-games-fg.firebaseapp.com",
  projectId: "ecommerce-bt-games-fg",
  storageBucket: "ecommerce-bt-games-fg.appspot.com",
  messagingSenderId: "757055346711",
  appId: "1:757055346711:web:b50058e5189d1307462452"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);