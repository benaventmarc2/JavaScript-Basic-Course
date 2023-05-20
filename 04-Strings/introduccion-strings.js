// Strings
let str_sng = "Hola soy un texto con comillas dobles";
let str_dbl = "Hola soy un texto con comillas simples";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_simples =
  'El otro día me dijo literalmente "ve a sacar la basura"';

console.log(str_comillas);
console.log(str_comillas_simples);

// Comillas invertidas
let str_backticks = `Hola esto es un string con backtick`;
console.log(str_backticks);

let nombre = "Marc Benavent Amaya";
let saludo = `Hola, ${nombre} !Bienvenido!`;
console.log(saludo);

// Plantillas HTML
let plantilla = `
<html> 
    <h1>Titulo, Pagina web de ${nombre}</h1>    
    <p>Esto es un párrafo</p>
</html>`;
console.log(plantilla);

// Introducción de variables en html
let libros = [
  "Empieza por el por qué.",
  "El monje que vendio su ferrari",
  "El poder del ahora",
];
