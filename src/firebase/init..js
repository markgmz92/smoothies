import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCD9b-sg_a9wrMr2ZrB0xoiAzLpSZiABZg",
    authDomain: "smoothies-cd98c.firebaseapp.com",
    databaseURL: "https://smoothies-cd98c.firebaseio.com",
    projectId: "smoothies-cd98c",
    storageBucket: "smoothies-cd98c.appspot.com",
    messagingSenderId: "442049074541",
    appId: "1:442049074541:web:338d997cd83acff2183664",
    measurementId: "G-GJQEVR2P6T"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})
  firebase.analytics();

  //export firestore database
  export default firebaseApp.firestore()