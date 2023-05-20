// Iterar los valores de una lista
const array = [1, 2, 3, 4, 5, 6, 1];

// Forma antigua
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 1,2,3,4,5,6,hola
}
let suma = 0;
array.forEach((i) => {
  suma += i;
  console.log(i); // 1,2,3,4,5,6,hola
});
console.log(suma);

// Búsqueda de un valor dentro de una lista find
const variable = array.find((i) => {
  if (i === 2) return true;
});
console.log(variable);

const listaObjetos = [
  {
    nombre: "Marc",
    edad: 35,
  },
  {
    nombre: "Benavent",
    edad: 24,
  },
];

const objeto = listaObjetos.find((o) => {
  if (o.nombre === "Marc") {
    return true;
  }
});
console.log(objeto);

const objeto2 = listaObjetos.find((o) => {
  return o.nombre === "Marc";
});
console.log(objeto2);

const objeto3 = listaObjetos.find((o) => o.nombre === "Marc");
console.log(objeto3);

const { edad } = listaObjetos.find((o) => o.nombre === "Benavent");
console.log(edad);
