import _firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBRMsyB78aQiSryWt54sMhFToc9zt18CO4",
    authDomain: "pokemon-game-smarto.firebaseapp.com",
    databaseURL: "https://pokemon-game-smarto-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-smarto",
    storageBucket: "pokemon-game-smarto.appspot.com",
    messagingSenderId: "260869079574",
    appId: "1:260869079574:web:cb62f0c9e96a4687e4ab37"
};
_firebase.initializeApp(firebaseConfig);
export const firebase = _firebase;
export const dataBase = _firebase.database();
export default dataBase;
