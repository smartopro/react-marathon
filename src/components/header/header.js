import s from "./header.module.css";
import {useHistory} from "react-router-dom";

export const Header = ({title, descr}) => {
    const history = useHistory();
    const onClickHandler = () => {
        history.push("game");
    };

    return (
        <header className={s.root}>
            <div className={s.forest}/>
            <div className={s.silhouette} />
            <div className={s.moon} />
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={onClickHandler}>Start game</button>
            </div>
        </header>
    )
}
