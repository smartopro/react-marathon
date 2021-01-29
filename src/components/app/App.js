// Components
import {Header} from "../header/header.js";
import {Layout} from "../layout/layout.js";
import {Footer} from "../footer/footer.js";

// Assets
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import {PokemonCard} from "../pokemon-card/pokemon-card.js";
import POKEMONS from "../../assets/pokemons.json";

// CSS
import s from "./app.module.css";

function App() {
  return (
    <>
        <Header title="This is title" descr="This is Description!" />
        <Layout id="layout-1" title="This is layout #1" descr="This is description of layout #1!" colorBg="#fcde08" urlBg={bg1}>
            <p>
                In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

                To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
            </p>
        </Layout>
        <Layout id="layout-2" title="This is layout #2" descr="This is description of layout #2!" colorBg="#fcde08">
            <div className={s.flex}>
                {
                    POKEMONS ? POKEMONS.map(pokemon => <PokemonCard
                        key={pokemon?.id}
                        type={pokemon?.type}
                        name={pokemon?.name}
                        position={{
                            top: pokemon?.values?.top,
                            right: pokemon?.values?.right,
                            bottom: pokemon?.values?.bottom,
                            left: pokemon?.values?.left
                        }}
                        img={{
                            src: pokemon?.img,
                            alt: pokemon?.name
                        }}
                    />) : <p>No pokemons found</p>
                }
            </div>
        </Layout>
        <Layout id="layout-3" title="This is layout #3" descr="This is description of layout #3!" colorBg="#fcde08" urlBg={bg2}>
            <p>
                Layout #3
            </p>
        </Layout>
        <Footer />
    </>
  );
}

export default App;
