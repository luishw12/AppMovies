import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

async function loginEmailPass(email: string, pass: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, pass);
    return { ok: true, res: res };
  } catch (err: any) {
    return { ok: false, message: err.message };
  }
}

async function registerEmailPass(name: string, email: string, pass: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    const user = res.user;

    updateProfile(auth.currentUser!, {
      displayName: name,
    });

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      favorites: [],
    });
    return { ok: true };
  } catch (error: any) {
    return { ok: false, message: error.message };
  }
}

async function recoverPass(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      ok: true,
      message: "Email de recuperação de senha enviado com sucesso!",
    };
  } catch (error: any) {
    return { ok: false, message: error.message };
  }
}

async function logout() {
  await signOut(auth);
}

export { loginEmailPass, registerEmailPass, recoverPass, logout };
