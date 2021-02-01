import {useState} from "react";

import NavBar from "../nav-bar/nav-bar.js";
import Menu from "../menu/menu.js";

const MenuHeader = () => {
    const [active, setActive] = useState(false);

    const setMenuState = state => setActive(state);

    return (
        <>
            <Menu menuState={active} />
            <NavBar setMenuState={setMenuState} />
        </>
    )
}

export default MenuHeader;
