import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-5V1d0enIPg6KpwMgKaLEhIyb_NPN1fo",
  authDomain: "zaio-amazn-clone.firebaseapp.com",
  projectId: "zaio-amazn-clone",
  storageBucket: "zaio-amazn-clone.appspot.com",
  messagingSenderId: "697888601292",
  appId: "1:697888601292:web:48a45da65425607f803e69",
  measurementId: "G-TGRS8W5EZ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyB-5V1d0enIPg6KpwMgKaLEhIyb_NPN1fo",
//   authDomain: "zaio-amazn-clone.firebaseapp.com",
//   projectId: "zaio-amazn-clone",
//   storageBucket: "zaio-amazn-clone.appspot.com",
//   messagingSenderId: "697888601292",
//   appId: "1:697888601292:web:48a45da65425607f803e69",
//   measurementId: "G-TGRS8W5EZ1",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
