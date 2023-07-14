import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCCdy0-tuzLyrSAoel8y6fEjmA5s4WFyI",
  authDomain: "appmovies-react-native-expo.firebaseapp.com",
  projectId: "appmovies-react-native-expo",
  storageBucket: "appmovies-react-native-expo.appspot.com",
  messagingSenderId: "349852849835",
  appId: "1:349852849835:web:ec2a5add5f6133aeb589ee",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  app,
  db
}
