import firebase from "firebase";

const firebaseConfig = {
  apiKey: "your key",
  authDomain: "your auth domain",
  databaseURL: "your database url",
  projectId: "your project id",
  storageBucket: "your storage bucket",
  messagingSenderId: "your messaging sender id",
  appId: "your app id",
};

export default firebase.initializeApp(firebaseConfig);
