// Trabajando con Objetos
const obj = {
  id: 4,
  nombre: "Marc",
  apellido: "Benavent",
  isDeveloper: true,
  libros_favoritos: ["El método", "El código de la manifestación"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj["4-juegos"]);
const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Julian";
console.log(obj2.nombre);
console.log(obj.nombre);

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Jean";
console.log(obj.nombre);
console.log(obj3.nombre);

// Como ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
  { titulo: "Lo que el viento se llevo", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 },
];
console.log(listaPeliculas);

// Para ordenar .sort()
listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listaPeliculas);