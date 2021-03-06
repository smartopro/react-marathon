import {useState, useCallback} from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";

// Components
import StartPage from "./routes/start-page/start-page.js";
import BoardPage from "./routes/board-page/board-page.js";
import FinishPage from "./routes/finish-page/finish-page.js";

// Context
import {PokemonContext} from "../../context/pokemonContext.js";

// CSS
// import s from "./game-page.module.css";

const GamePage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [player2Pokemons, setPlayer2Pokemons] = useState([]);
    const [winner, setWinner] = useState(null);
    const match = useRouteMatch();

    const addPokemon = pokemon => {
        setPokemons(prevPokemons => [...prevPokemons, pokemon]);
    }

    const deletePokemon = pokemon => {
        setPokemons(prevPokemons => prevPokemons.filter(p => p.id !== pokemon.id));
    }

    const clearPokemons = useCallback(() => {
        setPokemons([]);
    }, [])

    const clearPlayer2Pokemons = useCallback(() => {
        setPlayer2Pokemons([]);
    }, [])

    return (
        <PokemonContext.Provider value={{
            pokemons,
            addPokemon,
            deletePokemon,
            clearPokemons,
            player2Pokemons,
            setPlayer2Pokemons,
            clearPlayer2Pokemons,
            winner,
            setWinner
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;
