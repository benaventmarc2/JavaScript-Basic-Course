// Listas, array o arreglo
const lista1 = [1, "hola", 3, 4];
console.log(lista1[0]);

const lista2 = new Array(4, 6, 2, 1, 2);
console.log(lista2);

// Objetos
const movil = {
  altura: 10,
  anchura: 2,
  marca: "Xiamoi",
  isWhite: true,
  contactos: ["Marc", "Benavent", "Amaya"],
  tarjeta: {
    marca: "Sandisk",
    almacenamiento: "32GB",
  },
};
console.log(movil.anchura);
console.log(movil.tarjeta);

movil.anyo = 2019;
console.log(movil.anyo);

// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);
