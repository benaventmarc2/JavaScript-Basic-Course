const persona = {
  nombre: "Marc",
  edad: 23,
};

console.log(persona);

function obtenerDobleEdad(edad) {
  return 2 * edad;
}

const dobleEdad = obtenerDobleEdad(persona.edad);
console.log("El doble de la edad es: " + dobleEdad);

function obtenArray(edad) {
  let arrayNums = [];
  for (let i = 0; i < 10; i++) {
    const element = edad + i;    
    arrayNums = [...arrayNums, element];
  }
  return arrayNums;
}

const array = obtenArray(persona.edad);
console.log(array);
