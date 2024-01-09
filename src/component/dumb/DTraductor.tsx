import "../../style/Traductor.css"
import { ReactNode } from "react";

function DTraductor(props: { children: ReactNode }): JSX.Element {
    return (
        <section className="traductor">
            {props.children}
        </section>
    )
}

export default DTraductor;