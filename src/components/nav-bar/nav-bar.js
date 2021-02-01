import {useState} from "react";

import s from "./nav-bar.module.css";
import cn from "classnames";

function NavBar({setMenuState}) {
    const [active, setActive] = useState(false);

    const onClickHandler = () => {
        setActive(a => !a);
        setMenuState(!active);
    }

    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: active})} onClick={onClickHandler} href="#toggle">
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
