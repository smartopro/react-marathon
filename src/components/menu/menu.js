import {Link} from "react-router-dom";

import cn from "classnames";

import s from "./menu.module.css";

const routes = [
    {
        link: "/",
        label: "HOME"
    }, {
        link: "/game",
        label: "GAME"
    }, {
        link: "/about",
        label: "ABOUT"
    }, {
        link: "/contact",
        label: "CONTACT"
    }
]

function Menu({isActive, setActive}) {
    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isActive === true,
            [s.deactive]: isActive === false
        })}>
            <div className={s.overlay} />
            <div>
                <ul>
                    {
                        routes.map(route => (
                            <li key={route.link}>
                                <Link to={route.link} onClick={() => setActive(false)}>
                                    {route.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;
