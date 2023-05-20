// Comparar Listas
// every
const array = [1, 2, -3, 4, -5, 6, -7, 7, -1234, 42, 1, 4, 61, 2];
// const resultado = array.every((i) => {
//   if (typeof i === "number") return true;
//   else return false;
// });

const resultado = array.every((i) => i > 0);
console.log(resultado);

// Comparar listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];
console.log(ar1 === ar2); // false

const compararArray = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
};
console.log(compararArray(ar1, ar2)); // true

const ar3 = [1, 2, 3, 6];
console.log(compararArray(ar1, ar3)); // false
