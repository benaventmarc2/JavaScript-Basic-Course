// Funciones tipo flecha - anonimas

const array = [1, 5, 6, 9, 3, 51, 2, 5, 3];
const array2 = array.map((valor) => valor * 2);
console.log(array2);

const dobleDelValor = (i) => i * 2;
const array3 = array2.map(dobleDelValor);
console.log(array3);
