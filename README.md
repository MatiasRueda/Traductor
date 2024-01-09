# Traductor

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)


## Introducción
Proyecto personal creado para mostrar mis conocimientos con AWS. </br>
Este pequeño proyecto ofrece al usuario un traductor con soporte en mas de 5 idiomas.

## Tipo de proyecto
Proyecto individual

## Captura de pantallas
<p>
	<img width="65%" src="https://i.postimg.cc/GtZxh7Qk/Traductor1.png"/>
	<img align="right" width="15%" src="https://i.postimg.cc/bwVP34zy/Traductor2.png"/>
</p>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
Smart:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
Dumb: No manejan la lógica, se encargan únicamente de la presentación.

### Carpeta Auxiliar
En esta carpeta guardo distintos types o variables constantes que usare a lo largo de todo el proyecto, de esta forma evito repetir código y con las variable contantes definidas evito tener cadenas mágicas 

### AWS Services
Utilizo los servicios de AWS para facilitarme la tarea de traducir. Para mas informacion sobre la funcion lambda utilizada en este proyecto ir a ver <a href="https://github.com/MatiasRueda/AWS_traductor">este repositorio</a>

## Tecnologías usadas
- React
- CSS
- TypeScript
- AWS Lambda
- AWS Translate
- AWS API Gateway

## Estructura
```
Traductor
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ auxiliar
│  │  ├─ idioma.ts
│  │  ├─ mensaje.ts
│  │  └─ type.ts
│  ├─ component
│  │  ├─ dumb
│  │  │  ├─ App.tsx
│  │  │  ├─ DLabel.tsx
│  │  │  └─ DTraductor.tsx
│  │  └─ smart
│  │     ├─ SFormulario.tsx
│  │     ├─ SInput.tsx
│  │     ├─ SSelection.tsx
│  │     ├─ STextArea.tsx
│  │     └─ STraductor.tsx
│  ├─ hook
│  │  └─ useEnviarSolicitud.ts
│  ├─ main.tsx
│  ├─ style
│  │  ├─ App.css
│  │  └─ Traductor.css
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

## Instalación 
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara todas las dependencias.

## Uso
Para poder usarlo simplemente utilizar el siguiente comando:
```
npm run dev
```
y dirigirse a la dirección que se muestra en consola

En caso de no realizar lo anteriormente dicho se puede dirigir directamente a la siguiente dirección y probar dicho proyecto: https://tubular-fairy-387e09.netlify.app