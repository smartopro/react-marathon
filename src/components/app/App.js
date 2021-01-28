import {Header} from "../header/header.js";
import {Layout} from "../layout/layout.js";
import {Footer} from "../footer/footer.js";

import bg1 from "../../assets/bg1.jpg";
import bg3 from "../../assets/bg3.jpg";

function App() {
  return (
    <>
        <Header title="This is title" descr="This is Description!" />
        <Layout id="layout-1" title="This is layout #1" descr="This is description of layout #1!" colorBg="#fcde08" urlBg={bg1} />
        <Layout id="layout-2" title="This is layout #2" descr="This is description of layout #2!" colorBg="#fcde08" />
        <Layout id="layout-3" title="This is layout #3" descr="This is description of layout #3!" colorBg="#fcde08" urlBg={bg3} />
        <Footer />
    </>
  );
}

export default App;
