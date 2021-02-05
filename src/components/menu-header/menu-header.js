import {useState} from "react";

import NavBar from "../nav-bar/nav-bar.js";
import Menu from "../menu/menu.js";

const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(false);

    return (
        <>
            <Menu setActive={setActive} isActive={isActive} />
            <NavBar setActive={setActive} isActive={isActive} bgActive={bgActive} />
        </>
    )
}

export default MenuHeader;
