import { auth, provider } from "./firebase.js";
import {
  signInWithRedirect,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// LOGIN
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loginBtn");

  if (btn) {
    btn.addEventListener("click", async () => {
      try {
        await signInWithRedirect(auth, provider);
      } catch (e) {
        console.error("Erro no login:", e);
      }
    });
  }
});

// CONTROLE DE SESSÃO
onAuthStateChanged(auth, (user) => {
  const path = window.location.pathname;

  const isIndex = path.includes("index");
  const isPainel = path.includes("painel");

  if (user && isIndex) {
    window.location.replace("painel.html");
  }

  if (!user && isPainel) {
    window.location.replace("index.html");
  }
});

// LOGOUT
window.logout = async () => {
  try {
    await signOut(auth);
    window.location.replace("index.html");
  } catch (e) {
    console.error("Erro logout:", e);
  }
};