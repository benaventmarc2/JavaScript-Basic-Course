// Funciones generadoras

function* generaId() {
  let id = 0;
  while (true) {
    id++;
    yield id; // Espera hasta la siguiente llamada (call)
    if (id === 10) return;
  }
}
const gen = generaId();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
