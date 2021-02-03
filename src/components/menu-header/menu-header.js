import {useState} from "react";

import NavBar from "../nav-bar/nav-bar.js";
import Menu from "../menu/menu.js";

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);

    return (
        <>
            <Menu isActive={isActive} />
            <NavBar setActive={setActive} isActive={isActive} />
        </>
    )
}

export default MenuHeader;
