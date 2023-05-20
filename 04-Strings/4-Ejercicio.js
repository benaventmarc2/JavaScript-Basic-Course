/*
Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

let nombre = "Marc";
let apellido = "Benavent";
let str_1 = str_1.concat(nombre, " ", apellido);
console.log(str_1);

let str_2 = "estudianteMayus";
let str_2_modified = str_2.toUpperCase();
console.log(str_2_modified);

let str_3 = "estudianteMinus";
let str_3_modified = str_3.toLowerCase();
console.log(str_3_modified);

let number_str_1 = str_1.length;
console.log(number_str_1);

let first_Letter = nombre.charAt(0);
console.log(first_Letter);

let last_Letter = apellido.charAt(apellido.length - 1);
console.log(last_Letter);

let removeSpaces = str_1.replace(/\s/g, "");
console.log(removeSpaces);

let isInString = str_1.includes(nombre);
console.log(isInString);

