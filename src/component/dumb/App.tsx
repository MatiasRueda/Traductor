import { Fragment } from "react";
import "../../style/App.css";
import STraductor from "../smart/STraductor";

function App(): JSX.Element {
    return (
        <Fragment>
            <header>Mi Traductor</header>
            <main>
                <STraductor/>
            </main>
        </Fragment>
    )
}

export default App;