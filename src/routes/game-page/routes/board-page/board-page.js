import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

// Context
import {PokemonContext} from "../../../../context/pokemonContext.js";

// Components
import {PokemonCard} from "../../../../components/pokemon-card/pokemon-card.js";
import PlayerBoard from "./component/player-bord/player-board.js";

// CSS
import s from './board-page.module.css';

const BoardPage = () => {
    const {pokemons, setPlayer2Pokemons, setWinner} = useContext(PokemonContext);
    const [turn, setTurn] = useState(null);
    const [board, setBoard] = useState([]);
    const [steps, setSteps] = useState(0);
    const [player2, setPlayer2] = useState([]);
    const [player1, setPlayer1] = useState(() =>
        Object.values(pokemons).map(p => ({
            ...p,
            possession: "blue"
        }))
    );
    const [chosenCard, setChosenCard] = useState(null);
    const history = useHistory();
    if (!Object.keys(pokemons).length) history.replace("/game");

    useEffect(() => {
        async function fetchData() {
            const boardRequest = await fetch("https://reactmarathon-api.netlify.app/api/board");
            const boardResponse = await boardRequest.json();
            setBoard(boardResponse.data);

            const player2Request = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
            const player2Response = await player2Request.json();

            setPlayer2(() => player2Response.data.map(p => ({
                ...p,
                possession: "red"
            })));

            setPlayer2Pokemons(player2Response.data);
        }

        fetchData();
    }, [setPlayer2Pokemons]);

    const onBoardClickHandler = async position => {
        if (chosenCard) {
            const params = {
                position,
                card: chosenCard,
                board
            }

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (chosenCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== chosenCard.id))
            }

            if (chosenCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== chosenCard.id))
            }

            setBoard(request.data);
            setSteps(s => s + 1);
            setChosenCard(null);
        }
    }

    useEffect(() => {
        const counterWin = (board, player1, player2) => {
            let player1Count = player1.length;
            let player2Count = player2.length;

            board.forEach(item => {
                if (item.card.possession === "red") {
                    player2Count++;
                }

                if (item.card.possession === "blue") {
                    player1Count++;
                }
            })

            return [player1Count, player2Count];
        }

        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2) {
                alert("WIN");
                setWinner(1);

            } else {
                alert("LOOSE");
                setWinner(2);
            }
            history.push("./finish");
        }
    }, [steps, board, player1, player2, history, setWinner]);

    const onClickCard = p => {
        if (!turn || p.player !== turn) {
            setChosenCard(p);
            setTurn(p.player);
        }
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    <PlayerBoard
                        player={1}
                        cards={player1}
                        onClickCard={onClickCard}
                    />
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
                            {b.card && <PokemonCard rootClassName="cardInbound" {...b.card} minimize={true} isActive={true} isSelected={false} />}
                        </div>)
                    )
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={onClickCard}
                />
            </div>
        </div>
    );
};

export default BoardPage;
