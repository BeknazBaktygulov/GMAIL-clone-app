import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA1sZy1WgQeDCpoJ7Oi7A0CLsuloIb5ntQ",
  authDomain: "clone-yt-47e97.firebaseapp.com",
  projectId: "clone-yt-47e97",
  storageBucket: "clone-yt-47e97.appspot.com",
  messagingSenderId: "822668538455",
  appId: "1:822668538455:web:e6c135c7130492551fe912"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };

/*   Go to SendMail.js to see how we push sent email back to inbox and how it updates database

PS C:\Users\12063\OneDrive\Desktop\JavaScript projects\React JS\gmail> npm install -g firebase-tools
PS C:\Users\12063\OneDrive\Desktop\JavaScript projects\React JS\gmail> firebase login   
Already logged in as enelbbs9@gmail.com
PS C:\Users\12063\OneDrive\Desktop\JavaScript projects\React JS\gmail> npm add firebase  */