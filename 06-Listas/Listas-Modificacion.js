// Cómo trabajar con listas
let var1 = { id: false };
let array = [1, "hola", null, Infinity, undefined, var1];
console.log(array);

// Acceder a los valores de un array a través de su posición
console.log(array[1]);

// Métodos para introducir nuevos valores en el array
// push, unshift

// Introducir valores al final
array.push("final", 45, 100, false);
console.log(array);

// Introducir valores al principio
array.unshift("inicio", 42);
console.log(array);

// Métodos para elminar valores en el array
// pop, shift

const array2 = [1, 3, "hola", false];
// Valores al final
array2.pop();
console.log(array2); // 1,3,"hola"
array2.pop();
console.log(array2); // 1,3

// Valores al principio
array2.shift();
console.log(array2); // 3

// Método para eliminar, modificar o añadir valores
// splice(x,y,z)
const array3 = [1, 2, 3, 4, 5, 6];

// Eliminar valores
array3.splice(2, 3);
console.log(array3); // 1,2,6

// Agregar valores
array3.splice(2, 0, "hola", 2, 3, 4);
console.log(array3); // 1,2,"hoia",2,3,4,6

// Modificar valores
array3.splice(2,1, 3);
console.log(array3); // 1,2,3,2,3,4,6
