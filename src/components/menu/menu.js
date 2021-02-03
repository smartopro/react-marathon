import cn from "classnames";

import s from "./menu.module.css";

const routes = [
    {
        link: "#welcome",
        label: "HOME"
    }, {
        link: "#game",
        label: "GAME"
    }, {
        link: "#about",
        label: "ABOUT"
    }, {
        link: "#contact",
        label: "CONTACT"
    }
]

function Menu({isActive}) {
    return (
        <div className={cn(s.menuContainer, isActive ? s.active : s.deactive)}>
            <div className={s.overlay} />
            <div>
                <ul>
                    {
                        routes.map(route => (
                            <li>
                                <a href={route.link}>{route.label}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;
