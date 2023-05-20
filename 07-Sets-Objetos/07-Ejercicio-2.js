// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// 1 - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
var obj = new Object({
  nombre: "Marc",
  apellido: "Benavent",
  edad: 27,
  altura: 180,
  eresDesarrollador: true,
});
console.log(obj);

// 2 - Una variable que obtenga tu edad a partir del objeto anterior
var edadActual = obj.edad;
console.log(edadActual);
// 3 - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
var listaAmigos = [
  ...obj,
  {
    nombre: "Roni",
    apellido: "Siron",
    edad: 22,
    altura: 160,
    eresDesarrollador: false,
  },
  {
    nombre: "Laeira",
    apellido: "Coles",
    edad: 25,
    altura: 150,
    eresDesarrollador: false,
  },
];
console.log(listaAmigos);
// 4 - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
var orderList = listaAmigos.sort((a, b) => b.edad - a.edad);
console.log(orderList);
