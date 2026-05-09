import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_YIt5surJ4GtocHfHkbBOHnvoye-qamI",
  authDomain: "team-edits-painel.firebaseapp.com",
  projectId: "team-edits-painel",
  storageBucket: "team-edits-painel.firebasestorage.app",
  messagingSenderId: "740280877012",
  appId: "1:740280877012:web:edf61024fe2db7e1c9e041",
  measurementId: "G-SMKH7NLZ4P"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();