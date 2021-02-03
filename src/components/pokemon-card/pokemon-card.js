import {useState} from "react";
import cn from "classnames";

import s from "./pokemon-card.module.css";
import backImg from "../../assets/card-back-side.jpg";

export const PokemonCard = ( {
    isActive = false,
    onClickHandler,
    id,
    name,
    type,
    position: { top, right, bottom, left },
    img: { src, alt }
                             }) => {
    return (
        <div className={s.root} onClick={() => onClickHandler(id)}>
            <div className={ cn(s.pokemonCard, { [s.active]: isActive }) }>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, type)}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{top}</div>
                                <div className={cn(s.count, s.right)}>{right}</div>
                                <div className={cn(s.count, s.bottom)}>{bottom}</div>
                                <div className={cn(s.count, s.left)}>{left}</div>
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
                    <div className={cn(s.wrap, s.back)}>
                        <img src={backImg} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    )
}
