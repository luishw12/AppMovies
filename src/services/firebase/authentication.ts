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
    return { ok: true, message: "Login feito com sucesso!" };
  } catch (err: any) {
    return { ok: false, message: err.message };
  }
}

async function registerEmailPass(name: string, email: string, pass: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    const user = res.user;

    const defaultPhotoUrl =
      "https://cdn-icons-png.flaticon.com/512/847/847969.png";

    updateProfile(user, {
      displayName: name,
      photoURL: defaultPhotoUrl,
    });

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      favorites: [],
    });
    return { ok: true, message: "Conta criada com sucesso!" };
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
