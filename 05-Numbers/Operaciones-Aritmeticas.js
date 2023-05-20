// Principales operaciones aritméticas
let a = 3.2;
let b = 4.1;

// Suma
console.log(a + b);
// Resta
console.log(a - b);
// Multiplicacion
console.log(a * b);
// Division
console.log(a / b);

// Reperesentación de los numeros en cadenas de texto
console.log(typeof a);

let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);

// .toFixed
console.log(d.toFixed(3)); // 9,900
console.log(typeof d.toFixed(3)); // string

let e = 1839.123451234
console.log(e.toFixed(2)); // 1839.12

// .toPrecision
console.log(e.toPrecision(1)); // 2e+3
console.log(e.toPrecision(5)); // 1839.1
console.log(typeof e.toPrecision(5)); // string