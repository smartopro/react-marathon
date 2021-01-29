import s from "./layout.module.css";

export const Layout = ({id, title, descr, urlBg, colorBg}) => {
    const style = {};
    if (urlBg) style.backgroundImage = `url(${urlBg})`;
    if (colorBg) style.backgroundColor = colorBg;

    return (
        <section className={s.root} id={id} style={style}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator} />
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}