// some
const array = [-12, 26, 63, 34, 5];
const res = array.some((valor) => valor < 0);

console.log(res);

const existe = array.some((valor) => valor === 5);
console.log(existe);

const listaObjectos = [
  {
    nombre: "Marc",
    edad: 35,
  },
  {
    nombre: "Benavent",
    edad: 24,
  },
  {
    nombre: "Amaya",
    edad: 92,
  },
];

const existeMarc = listaObjectos.some((i) => i.nombre === "Marc");
console.log(existeMarc); // true

// Obtener una lista a partir de un objeto iterable
const str = "Hola soy Marc";
console.log(str[0]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_key = Array.from(keys);
console.log(ar_key);