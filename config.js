import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCrf4HQho0nzoZM15y3JLgyJW0_5Hk4Cw0",
  authDomain: "book-santa-fee79.firebaseapp.com",
  projectId: "book-santa-fee79",
  storageBucket: "book-santa-fee79.appspot.com",
  messagingSenderId: "295510496648",
  appId: "1:295510496648:web:fef85b2a44fa3de65c163d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
