import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD2ypjMiO2p39xrZwKFjlcUhIzkLuQUyQY",
    authDomain: "notes-2020-ee469.firebaseapp.com",
    databaseURL: "https://notes-2020-ee469.firebaseio.com",
    projectId: "notes-2020-ee469",
    storageBucket: "notes-2020-ee469.appspot.com",
    messagingSenderId: "945362077314",
    appId: "1:945362077314:web:4b6b25dd79c185f6d0569b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider};
  export default db;