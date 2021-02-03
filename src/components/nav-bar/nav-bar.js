import s from "./nav-bar.module.css";
import cn from "classnames";

function NavBar({setActive, isActive, bgActive = false}) {

    const onClickHandler = () => {
        setActive(state => !state);
    }

    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton, {[s.active]: isActive})} onClick={onClickHandler}>
                    <span/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
