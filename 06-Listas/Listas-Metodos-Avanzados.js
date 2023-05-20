// Trabajar con métodos más avanzados
// map, filter, reduce

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];
const val = array.forEach((i) => {
  console.log(i);
  return 4;
});
console.log(val); // undefined

const newArray = array.map((i, indice) => {
  return `${indice + 1} - ${i}`;
});
console.log(newArray);

const newArray2 = array.map((i, indice) => `${indice + 1} - ${i}`);
console.log(newArray2);

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
const personasMayores = listaObjectos.filter((i) => {
  if (i.edad > 30) return true;
  else return false;
});

console.log(personasMayores);

const personasMayores2 = listaObjectos.filter((i) => i.edad > 30);
console.log(personasMayores2);

const nuevaLista = listaObjectos.filter((i) => i.nombre !== "Marc");
console.log(nuevaLista);

const valores = [3, 54, 24, 61, 124];
const suma = valores.reduce((ant, cur, i, arrayOriginal) => {
  console.log(ant);
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  return ant + cur;
});
console.log(suma);
