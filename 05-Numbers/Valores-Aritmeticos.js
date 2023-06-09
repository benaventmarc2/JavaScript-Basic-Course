// Operador .valueOf - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);
console.log(a); // 2
console.log(b); // Number 3 {}
console.log(a + b); // 5

console.log(b.valueOf()); // 3

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN(Not a Number) - Infinity
let n = Number("adios");
console.log(n); // NaN
console.log(isNaN(n)); // true

let numerador = 19;
let divisior = 0;
let divisior_2 = null

console.log(numerador / divisior); // Infinity
console.log(numerador / divisior_2); // Infinity

// Como convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = "5.89";
let num2 = 17.2;
console.log(typeof numero); // string
console.log(numero + num2); // 5.8917.2 Concatenando strings
console.log(Number(numero) + num2); // 23.09

console.log(parseInt(numero)); // 5
console.log(parseFloat(numero)); // 5.89

let num3 = 4;
console.log(parseInt(num3)); // 4
console.log(parseFloat(num3)); // 4

// Números hexadecimales (base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex, 16)); // 239031

// Obtener los valores máximo y mínimo en js
let min_precision = Number.EPSILON;
let min_valor = Number.MIN_VALUE;
let max_valor = Number.MAX_VALUE;

console.log(min_precision); // 2.220446049250313e-16
console.log(min_valor); // 5e-324
console.log(max_valor); // 1.79769313486231....
console.log(2 ** 4); // Potencias - 16
