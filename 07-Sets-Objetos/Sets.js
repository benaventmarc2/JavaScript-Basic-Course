// Sets o conjuntos
const array = [1, 2, 3, 4, 5, 6, 3, 2];

const miSet = new Set(array);
console.log(miSet);

// .add()
miSet.add(0);
console.log(miSet);

// Eliminar valores .delete()
miSet.delete(5);
console.log(miSet);

// Limpiar el set .clear()
// miSet.clear();
// console.log(miSet);

// Saber si tiene un valor .has()
console.log(array.includes(2));
console.log(miSet.has(1));

// Tamaño del set .size()
console.log(miSet.size);

miSet.forEach((valor) => console.log(valor));

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);
