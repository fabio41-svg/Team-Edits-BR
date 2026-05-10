import { auth, provider } from "./firebase.js";
import {
  signInWithRedirect,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const btn = document.getElementById("loginBtn");

if (btn) {
  btn.addEventListener("click", async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (e) {
      console.log(e);
    }
  });
}

onAuthStateChanged(auth, (user) => {

  if (user && window.location.pathname.includes("index")) {
    window.location.href = "painel.html";
  }

  if (!user && window.location.pathname.includes("painel")) {
    window.location.href = "index.html";
  }

});

window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};