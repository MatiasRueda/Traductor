export type Solicitud = { 
    texto: string;
    entrada: string;
    salida: string
}

export type Respuesta = {
    status: number;
    traduccion: string;
}

export type Idioma = {
    codigo: string;
    texto: string;
}