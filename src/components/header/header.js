import s from "./header.module.css";

export const Header = ({title, descr, onStartGameHandler}) => (
    <header className={s.root}>
        <div className={s.forest} />
        <div className={s.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
            <button onClick={onStartGameHandler}>Start game</button>
        </div>
    </header>
)
