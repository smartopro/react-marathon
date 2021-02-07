import {useEffect, useState} from "react";

// CSS
import s from "./game-page.module.css";
import {PokemonCard} from "../../components/pokemon-card/pokemon-card.js";
import dataBase from "../../services/firebase.js";

function GamePage() {
    const [pokemons, setPokemons] = useState({});

    const onCardClickHandler = baseId => {
        Object.fromEntries(
            Object.entries(pokemons)
                .map(
                    ([key, p]) => {
                        if (key === baseId) {
                            let pokemon = {...p, active: !p.active};

                            // Save pokemon in DB
                            dataBase
                                .ref(`pokemons/${key}`)
                                .set(pokemon)
                                .then(() => {
                                    setPokemons(prevPokemons => ({
                                        ...prevPokemons,
                                        [key]: pokemon
                                    }));
                                });

                            return [key, pokemon]
                        }
                        else return [key, p]
                    }
                )
        )
    }

    const onBtnAddClickHandler = () => {
        const newKey = dataBase.ref().child("pokemons").push().key;
        const pokemonsCount = Object.keys(pokemons).length;
        const randomPokemonNumber = Math.floor(Math.random() * pokemonsCount); // [0 .. pokemonsCount-1]
        const newPokemon = {
            [newKey]: Object.values(pokemons)[randomPokemonNumber]
        }

        dataBase
            .ref('pokemons/' + newKey)
            .set(newPokemon[newKey])
            .then(() => {
                setPokemons(prevPokemons => ({ ...prevPokemons, ...newPokemon }));
            });
    }

    useEffect(() => {
        dataBase.ref("pokemons").once("value", snapshot => {
            setPokemons(snapshot.val());
        })
    }, []);

    return (
        <div className={s.root}>
            <button className={s.btnAdd} onClick={onBtnAddClickHandler}>Add random</button>
            <div className={s.flex}>
                {
                    pokemons
                        ? Object.entries(pokemons).map(([key, p]) =>
                            <PokemonCard
                                key={key}
                                baseId={key}
                                id={p?.id}
                                type={p?.type}
                                name={p?.name}
                                position={p?.values}
                                img={{
                                    src: p?.img,
                                    alt: p?.name
                                }}
                                isActive={p?.active}
                                onClickHandler={onCardClickHandler}
                            />
                        )
                        : <p>No pokemons found</p>
                }
            </div>
        </div>
    );
}

export default GamePage;
