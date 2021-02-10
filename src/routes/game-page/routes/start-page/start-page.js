import {useEffect, useState, useContext} from "react";

// Context
import {FirebaseContext} from "../../../../context/firebaseContext.js";
import {PokemonContext} from "../../../../context/pokemonContext.js";

// Components
import {PokemonCard} from "../../../../components/pokemon-card/pokemon-card.js";

// CSS
import s from "./start-page.module.css";
import {Link} from "react-router-dom";

function StartPage() {
    const firebase = useContext(FirebaseContext);
    const {
        deletePokemon: deleteFromSelectedPokemons,
        addPokemon: addToSelectedPokemons,
        clearPokemons: clearSelectedPokemons
    } = useContext(PokemonContext);

    const [pokemons, setPokemons] = useState({});

    const onCardClickHandler = baseId => {
        let p = pokemons[baseId];
        p = { ...p, isSelected: !p.isSelected  };

        if (p.isSelected) {
            addToSelectedPokemons(p);
        } else {
            deleteFromSelectedPokemons(p);
        }

        setPokemons(prevPokemons => ({
            ...prevPokemons,
            [baseId]: p
        }));
    }

    useEffect(() => {
        firebase.getPokemonsSocket(poks => {
            setPokemons(poks);
        });
        clearSelectedPokemons();
    }, [firebase, clearSelectedPokemons]);

    return (
        <div className={s.root}>
            <Link to="./game/board" className={s.btnStart}>Start game</Link>
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
                                isSelected={p?.isSelected}
                                onClickHandler={onCardClickHandler}
                            />
                        )
                        : <p>No pokemons found</p>
                }
            </div>
        </div>
    );
}

export default StartPage;
