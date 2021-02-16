import {useState} from "react";

import {PokemonCard} from "../../../../../../components/pokemon-card/pokemon-card.js";

import cn from "classnames";
import s from "./player-board.module.css";

const PlayerBoard = ({cards, onClickCard, player}) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {
                cards.map(p =>
                    <div
                        key={""+p?.id+player}
                        className={cn(s.cardBoard, {
                            [s.selected]: isSelected === p?.id
                        })}
                         onClick={() => {
                             setSelected(p?.id);
                             onClickCard && onClickCard({
                                 ...p,
                                 player
                             });
                         }}
                    >
                        <PokemonCard
                            key={p?.id}
                            baseId={p?.id}
                            id={p?.id}
                            type={p?.type}
                            name={p?.name}
                            values={p?.values}
                            img={p?.img}
                            alt={p?.name}
                            isActive={p?.active}
                            rootClassName="root-board"
                            cardClassName="card"
                            minimize="true"
                        />
                    </div>
                )
            }
        </>
    )
}

export default PlayerBoard;
