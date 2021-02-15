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
    values,
    img,
    alt,
    possession
}) => {
    return (
        <div
            className={cn(s.root, {[s[rootClassName]]: !!rootClassName})}
            onClick={() => onClickHandler(baseId, id)}
            style={{
                maxWidth, maxHeight
            }}
        >
            <div className={cn(s.pokemonCard, {[s[cardClassName]]: !!cardClassName, [s.active]: isActive, [s.selected]: isSelected})}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s[type], s[possession])}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{values.top}</div>
                                <div className={cn(s.count, s.right)}>{values.right}</div>
                                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                                <div className={cn(s.count, s.left)}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={alt} />
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
