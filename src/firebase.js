import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEAxbQC26du6VPf5KkClApUQthRc_FTYU",
    authDomain: "iomessage-2f610.firebaseapp.com",
    databaseURL: "https://iomessage-2f610.firebaseio.com",
    projectId: "iomessage-2f610",
    storageBucket: "iomessage-2f610.appspot.com",
    messagingSenderId: "702647189711",
    appId: "1:702647189711:web:d9b7189a7bb2be9c4837ba",
    measurementId: "G-18ZYVRWZCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

