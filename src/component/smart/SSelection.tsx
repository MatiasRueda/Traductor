import { ReactNode, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type SelectParams = {
    nombre: string;
    children: ReactNode;
    defaultValue: string;
    register?: UseFormRegister<FieldValues>;
}

function SSelection({...rest}: SelectParams): JSX.Element {
    const [ idiomaEntrada, setIdiomaEntrada ] = useState<string>(rest.defaultValue);
    return (
        <select value={idiomaEntrada} 
                className={rest.nombre}
                {...rest.register!(rest.nombre)}
                onChange={e => setIdiomaEntrada(e.target.value)}>
                    {rest.children}
        </select>
    )
}

export default SSelection;