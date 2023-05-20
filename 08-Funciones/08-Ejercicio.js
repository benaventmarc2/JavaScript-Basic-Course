// Crea un archivo JS que contenga las siguientes líneas

// 1 - Una función sin parámetros que devuelva siempre "true"
function returnTrue() {
  return true;
}
// 2 - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function miFuncionAsincrona() {
//   await new Promise((resolve) => {
//     console.log("Hola, soy una promesa");
//     resolve();
//   }, 5000);
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
miFuncionAsincrona();
// 3 - Una función generadora de índices pares automáticos
function* generadorIndicesPares() {
  let indice = 0;
  while (true) {
    yield (indice += 2);
  }
}
const generador = generadorIndicesPares();
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
