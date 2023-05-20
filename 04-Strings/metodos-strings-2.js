// Metodos de cadenas de texto - 2
let input = "VIRgo";
let db = "virgo";

// toLowerCase() o toUpperCase()
console.log(input);
console.log(db);

console.log(input === db);
console.log(input == db);

console.log(input.toLowerCase() == db.toLowerCase());
console.log(input.toUpperCase() == db.toUpperCase());

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena";
let str_2 = "Hola soy la segunda cadena";

console.log(str_1.concat(" ", str_2, " ", "Mas cosas"));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.     ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4";
console.log(str_4.charAt(6));
console.log(str_4[6]);

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Marc y me gusta la programación. Mi nombre es Marc";
console.log(str_5.indexOf("Marc"));
console.log(str_5.indexOf("Marc2"));
console.log(str_5.lastIndexOf("Marc"));

