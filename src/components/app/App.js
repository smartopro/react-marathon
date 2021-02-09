import {Route, Switch, useRouteMatch, Redirect} from "react-router-dom";

// Context
import {FirebaseContext} from "../../context/firebaseContext.js";

// Services
import Firebase from "../../services/firebase.js";

// Components
import MenuHeader from "../menu-header/menu-header.js";
import GamePage from "../../routes/game-page/game-page.js";
import Footer from "../footer/footer.js";
import HomePage from "../../routes/home-page/home-page.js";
import AboutPage from "../../routes/about-page/about-page.js";
import ContactPage from "../../routes/contact-page/contact-page.js";
import NotFoundPage from "../../routes/not-found-page/not-found-page.js";

// Style
import cn from "classnames";
import s from "./App.module.css";

function App() {
    const match = useRouteMatch("/");

    return (
        <FirebaseContext.Provider  value={new Firebase()}>
            <Switch>
                <Route path="/404" render={NotFoundPage}>

                </Route>
                <Route>
                    <>
                        <MenuHeader bgActive={!match?.isExact}/>
                        <div className={cn(s.wrap, {[s.isHomePage]: match?.isExact})}>
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/game" component={GamePage} />
                                <Route path="/about" render={AboutPage} />
                                <Route path="/contact" render={ContactPage} />
                                <Route>
                                    <Redirect to="/404" />
                                </Route>
                            </Switch>
                        </div>
                        <Footer />
                    </>
                </Route>
            </Switch>
        </FirebaseContext.Provider>
    )
}

export default App;
