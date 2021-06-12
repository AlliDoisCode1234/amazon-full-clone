import firebase from "firebase";
// firebase init

const firebaseConfig = {

 

    apiKey: "AIzaSyB0ed-zn4io241-yE2AgzcAhftRzx719m0",
    authDomain: "full-clone-cd754.firebaseapp.com",
    databaseURL: "https://full-clone-cd754-default-rtdb.firebaseio.com",
    projectId: "full-clone-cd754",
    storageBucket: "full-clone-cd754.appspot.com",
    messagingSenderId: "503390215767",
    appId: "1:503390215767:web:81c4923018480f1b5c4d12"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };