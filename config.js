import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyABR28fD7Xxzfk9EYwbaJWu5n63dsyYO8k",
    authDomain: "story-hub-ac9c9.firebaseapp.com",
    projectId: "story-hub-ac9c9",
    storageBucket: "story-hub-ac9c9.appspot.com",
    messagingSenderId: "930591646275",
    appId: "1:930591646275:web:39a48be65441446bd92af6",
    measurementId: "G-YFJ7KVK341"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();