import {useContext, useState} from "react";
import {useHistory} from "react-router-dom";

// Components
import {PokemonCard} from "../../../../components/pokemon-card/pokemon-card.js";

// Context
import {PokemonContext} from "../../../../context/pokemonContext.js";
import {FirebaseContext} from "../../../../context/firebaseContext.js";

// CSS
import s from './finish-page.module.css';

const FinishPage = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const {pokemons, player2Pokemons, clearPokemons, clearPlayer2Pokemons, winner} = useContext(PokemonContext);
    const history = useHistory();
    const firebase = useContext(FirebaseContext);

    if (!pokemons?.length || !player2Pokemons?.length) history.push("./");

    const onEndGameHandler = () => {
        // Write card
        if (winner === 1 && selectedPokemon) {
            firebase.addPokemon(selectedPokemon);
        }

        // Clear context
        clearPokemons();
        clearPlayer2Pokemons();

        history.push("./");
    }

    const onPokemonClick = (_, id) => {
        if (winner === 1) setSelectedPokemon(player2Pokemons.find(p => p.id === id));
    }

    return (
        <div className={s.root}>
            <div className={s.player}>
                {
                    pokemons.map(p => <PokemonCard key={"1_"+p.id} {...p} isActive={true} isSelected={false} maxHeight={300} />)
                }
            </div>
            <button className={s.btnAgain} onClick={onEndGameHandler}>END GAME</button>
            <div className={s.player}>
                {
                    player2Pokemons.map(p => <PokemonCard key={"2_"+p.id} {...p} isActive={true} isSelected={selectedPokemon?.id === p.id} maxHeight={300} onClickHandler={onPokemonClick} />)
                }
            </div>
        </div>
    );
};

export default FinishPage;
