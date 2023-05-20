// Qué son las funciones, cómo se declaran y cómo se utilizan
let _nombre = "Marc";
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
saludar(_nombre);
///////
function despedir(nombre) {
  console.log(`Adios ${nombre}`);
}
despedir(_nombre);
///////
let persona = { nombre: "Juan", apellido: "González" };
function saludarPersona(obj) {
  console.log(`Hola ${obj.nombre} ${obj.apellido}`);
}
saludarPersona(persona);
////////////
function imprimeNumero(num) {
  console.log(num);
}
imprimeNumero(4);
/////////
function imprimir(...parametros) {
  console.log(parametros);
}
imprimir(1, 2, 3, 4, 5, "hola");
///////
function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}
const s = suma(1, 2, 3, 4, 5, 6, 7, 8);
console.log(s);
//////////
function multiplicar(a = 0, b = 0) {
  return a * b;
}
console.log(multiplicar(4,4));
