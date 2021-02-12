import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

// Context
import {PokemonContext} from "../../../../context/pokemonContext.js";

// Components
import {PokemonCard} from "../../../../components/pokemon-card/pokemon-card.js";

// CSS
import s from './board-page.module.css';

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);
    const [board, setBoard] = useState([]);
    const history = useHistory();
    // if (!Object.keys(pokemons).length) history.replace("/game");

    useEffect(async() => {
        const boardRequest = await fetch("https://reactmarathon-api.netlify.app/api/board");
        const boardResponse = await boardRequest.json();
        setBoard(boardResponse.data);
    }, []);

    const onBoardClickHandler = position => {
        console.log(position);
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
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
                                rootClassName="root-board"
                                cardClassName="card"
                                minimize="true"
                            />
                        )
                        : <p>No pokemons found</p>
                }
            </div>
            <div className={s.board}>
                {
                    board.map(b => (
                        <div
                            key={b.position}
                            className={s.boardPlate}
                            onClick={() => {
                                !b.card && onBoardClickHandler(b.position)
                            }}
                        >
                            {/*b.card && <PokemonCard {...b} minimize={true} />*/}
                        </div>)
                    )
                }
            </div>
        </div>
    );
};

export default BoardPage;
