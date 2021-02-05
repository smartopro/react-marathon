import {useState} from "react";

// CSS
import s from "./game-page.module.css";
import POKEMONS from "../../assets/pokemons.json";
import {PokemonCard} from "../../components/pokemon-card/pokemon-card.js";

function GamePage() {
    const [pokemons, setPokemons] = useState(() => POKEMONS);

    const onClickHandler = id => {
        setPokemons(prevPokemons => prevPokemons.map(
            p => p.id === id ? {...p, active: !p.active} : p
        ))
    }

    return (
        <div className={s.root}>
            <div className={s.flex}>
                {
                    pokemons ? pokemons.map(p => <PokemonCard
                        key={p?.id}
                        id={p?.id}
                        type={p?.type}
                        name={p?.name}
                        position={p?.values}
                        img={{
                            src: p?.img,
                            alt: p?.name
                        }}
                        isActive={p?.active}
                        onClickHandler={onClickHandler}
                    />) : <p>No pokemons found</p>
                }
            </div>
        </div>
    );
}

export default GamePage;
