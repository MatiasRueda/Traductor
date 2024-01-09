import { FieldError, FieldValues,  RegisterOptions, UseFormRegister } from "react-hook-form";

type InputParams = {
    nombre: string;
    tipo: string;
    inputIgual?: string;
    role?: string;
    reglas?: RegisterOptions;
    register?: UseFormRegister<FieldValues>;
    error?: FieldError;
}

function SInput({ ...rest }: InputParams): JSX.Element {
    return (
        <div className="cont-input">
            <input id={rest.nombre} autoComplete="off" 
                    aria-label={rest.nombre} role={rest.role} 
                    type={rest.tipo} {...rest.register!(rest.nombre, rest.reglas)}
                    {...rest} />
            <div className="cont-error">
                {rest.error && <p role="error" aria-label={rest.nombre + "-error"}>{rest.error.message}</p>}
            </div>
        </div>
    )
}

export default SInput;