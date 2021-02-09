import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBRMsyB78aQiSryWt54sMhFToc9zt18CO4",
    authDomain: "pokemon-game-smarto.firebaseapp.com",
    databaseURL: "https://pokemon-game-smarto-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-smarto",
    storageBucket: "pokemon-game-smarto.appspot.com",
    messagingSenderId: "260869079574",
    appId: "1:260869079574:web:cb62f0c9e96a4687e4ab37"
}
firebase.initializeApp(firebaseConfig);

export default class Firebase {
    constructor() {
        this.firebase = firebase;
        this.database = this.firebase.database();
    }

    async getPokemonsOnce() {
        return await this.database
            .ref("pokemons")
            .once("value")
            .then(snapshot => snapshot.val());
    }

    getPokemonsSocket(cb) {
        return this.database
            .ref("pokemons")
            .on("value", snapshot => {
                cb(snapshot.val());
            })
    }

    postPokemon(key, pokemon) {
        this.database
            .ref(`pokemons/${key}`)
            .set(pokemon)
    }

    addPokemon(pokemon, cb) {
        const newKey = this.database.ref().child("pokemons").push().key;
        this.database
            .ref(`pokemons/${newKey}`)
            .set(pokemon)
            .then(cb);
    }
}
