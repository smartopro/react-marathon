import cn from "classnames";

import s from "./pokemon-card.module.css";

export const PokemonCard = ( {
    minimize,
    cardClassName,
    rootClassName,
    maxWidth,
    maxHeight,
    isActive = true,
    isSelected = false,
    onClickHandler = () => {},
    id,
    baseId,
    name,
    type,
    position: { top, right, bottom, left } = {},
    img: { src = "", alt = "" } = {}
                             }) => {
    return (
        <div
            className={cn(s.root, {[s[rootClassName]]: !!rootClassName})}
            onClick={() => onClickHandler(baseId)}
            style={{
                maxWidth, maxHeight
            }}
        >
            <div className={cn(s.pokemonCard, {[s[cardClassName]]: !!cardClassName, [s.active]: isActive, [s.selected]: isSelected})}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s[type])}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{top}</div>
                                <div className={cn(s.count, s.right)}>{right}</div>
                                <div className={cn(s.count, s.bottom)}>{bottom}</div>
                                <div className={cn(s.count, s.left)}>{left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={src} alt={alt} />
                            </div>
                            { !minimize && (<div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>
                                    {name}
                                </h3>
                                <small className={s.type}>
                                    Type: <span>{type}</span>
                                </small>
                            </div>) }
                        </div>
                    </div>
                </div>
                <div className={s.cardBack}>
                    <div className={cn(s.wrap, s.back)} />
                </div>
            </div>
        </div>
    )
}
