/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const lista = [
    name = "Marc",
    age = 27,
    isDeveloper = true,
    birth = new Date(1996, 7, 29),
    book = {
        title: "Mecanica Clasica",
        autor: "John R. Taylor",
        date: new Date(2018, 8, 26),
        url: "https://www.google.es/books/edition/Mec%C3%A1nica_cl%C3%A1sica/aDbeDwAAQBAJ?hl=es&gbpv=0",
    }, 
];
console.log(birth);