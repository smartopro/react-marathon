import {useState} from "react";

import s from "./pokemon-card.module.css";
import backImg from "../../assets/card-back-side.jpg";

export const PokemonCard = ( {
    id,
    name,
    type,
    position: { top, right, bottom, left },
    img: { src, alt }
                             }) => {
    const [active, setActive] = useState(false);
    const onClickHandler = () => {
        setActive(a => !a);
    }

    return (
        <div className={s.root} onClick={onClickHandler}>
            <div className={`${s.pokemonCard} ${ active ? s.active : "" }`}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${type}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{top}</div>
                                <div className={[s.count, s.right].join(" ")}>{right}</div>
                                <div className={`${s.count} ${s.bottom}`}>{bottom}</div>
                                <div className={`${s.count} ${s.left}`}>{left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={src} alt={alt} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={backImg} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    )
}
