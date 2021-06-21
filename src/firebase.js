// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAW8QjdSCX6yLNcVkQE0GfMbj7dC5LQI-4",
    authDomain: "clone-e596e.firebaseapp.com",
    projectId: "clone-e596e",
    storageBucket: "clone-e596e.appspot.com",
    messagingSenderId: "24426449169",
    appId: "1:24426449169:web:c49c89ad2838b9ce4464b0",
    measurementId: "G-169VWQ1BPN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db,auth}