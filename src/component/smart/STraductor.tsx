import { useState } from "react";
import DTraductor from "../dumb/DTraductor";
import SFormulario from "./SFormulario";
import SSelection from "./SSelection";
import STextArea from "./STextArea";
import { IDIOMA } from "../../auxiliar/idioma";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import { Idioma, Respuesta, Solicitud } from "../../auxiliar/type";
import { MENSAJE } from "../../auxiliar/mensaje";

function STraductor(): JSX.Element {
    const URL: string = import.meta.env.VITE_AWS_API;
    const [ texto, setTexto ] = useState<string>("");
    const [ traduccion, setTraduccion ] = useState<string>("");
    const enviar = useEnviarSolicitud<Solicitud, Respuesta>(URL, METODO.POST);

    const enviarInformacion = async (data: any): Promise<void> => {
        if (!data.texto.trim().length)
            return;
        setTexto(data.texto);
        if (data.entrada === data.salida) {
            setTraduccion(data.texto);
            return;
        } 
        const solicitud: Solicitud = {
            texto: data.texto,
            entrada: data.entrada,
            salida: data.salida
        }

        await enviar.trigger(solicitud);
        const respuesta: Respuesta = enviar.data!;
        setTraduccion(respuesta.traduccion);
    }

    return <DTraductor>
                <SFormulario id="form-traducir" btnEnviar="Traducir"
                             onSubmit={enviarInformacion}>  
                                <SSelection nombre="entrada" defaultValue={IDIOMA.espaniol.codigo}>
                                    {Object.values(IDIOMA).map((idioma: Idioma) => 
                                        <option key={idioma.codigo} value={idioma.codigo}>{idioma.texto}</option>
                                    )}
                                </SSelection>
                                <SSelection nombre="salida" defaultValue={IDIOMA.ingles.codigo}>
                                    {Object.values(IDIOMA).map((idioma: Idioma) => 
                                        <option key={idioma.codigo} value={idioma.codigo}>{idioma.texto}</option>
                                    )}
                                </SSelection>
                                <STextArea nombre="texto" id="traducir" clase="texto" 
                                           placeholder={MENSAJE.TRADUCIR_PLACEHOLDER} texto={texto} />
                                <STextArea clase="traduccion" nombre="traduccion"
                                           placeholder={MENSAJE.TRADUCCION_PLACEHOLDER} id="traduccion" readonly={true}
                                           texto={enviar.isMutating? MENSAJE.CARGANDO : traduccion}>
                                </STextArea>
                        
                </SFormulario>
           </DTraductor>
}

export default STraductor;