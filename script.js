import { auth, provider } from "./firebase.js";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const btn = document.getElementById("loginBtn");

if (btn) {
  btn.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "painel.html";
    } catch (e) {
      console.log(e);
    }
  });
}

onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("painel") && !user) {
    window.location.href = "index.html";
  }
});

window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};