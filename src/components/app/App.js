import {useState} from "react";

// Components
import HomePage from "../../routes/home-page/home-page.js";
import GamePage from "../../routes/game-page/game-page.js";

function App() {
    const [page, setPage] = useState("home");

    const onStartGameHandler = () => setPage("game");
    const onExitGameHandler = () => setPage("home");

    switch (page) {
        case "home": return <HomePage onStartGameHandler={onStartGameHandler} />
        case "game": return <GamePage onExitGameHandler={onExitGameHandler} />
        default: return  <HomePage onStartGameHandler={onStartGameHandler} />
    }
}

export default App;
