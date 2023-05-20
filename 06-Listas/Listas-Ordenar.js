// sort
const array = [2, 5, 9, 15, 1, 2, 0, 4];
array.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return +1;
  } else {
    return 0;
  }
});
console.log(array);

// Ordenar únicamente arrays numéricos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 234];

arrayNumerico.sort((a, b) => a - b);
console.log(arrayNumerico);

arrayNumerico.sort((a, b) => b - a);
console.log(arrayNumerico);

///////////////
// Arrays de objetos
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
listaObjectos.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  else if (a.edad > b.edad) return +1;
  else return 0;
});
console.log(listaObjectos);

const listaObjectos2 = [
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
listaObjectos2.sort((a, b) => a.edad - b.edad);
console.log(listaObjectos2);