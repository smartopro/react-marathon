import s from "./nav-bar.module.css";
import cn from "classnames";

function NavBar({setActive, isActive}) {

    const onClickHandler = () => {
        setActive(state => !state);
    }

    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: isActive})} onClick={onClickHandler} href="#toggle">
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
