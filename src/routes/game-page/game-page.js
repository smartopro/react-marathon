// CSS
import s from "./game-page.module.css";

function GamePage({onExitGameHandler}) {
    return (
        <div className={s.root}>
            <button className={s.btnExit} onClick={onExitGameHandler}>Menu</button>
            Game page
        </div>
    );
}

export default GamePage;
