import {useContext} from "react";

// Context
import {PokemonContext} from "../../../../context/pokemonContext.js";

// Components
import {PokemonCard} from "../../../../components/pokemon-card/pokemon-card.js";

// CSS
import s from './board-page.module.css';

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);

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
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
