import cn from "classnames";

import s from "./menu.module.css";

function Menu({menuState}) {
    return (
        <div className={cn(s.menuContainer, menuState ? s.active : s.deactive)}>
            <div className={s.overlay} />
            <div>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
