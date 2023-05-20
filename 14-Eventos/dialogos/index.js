const boton = document.querySelector("#btn");
// console.log(boton);

boton.addEventListener("click", () => {
  console.log("click");
  //   alert("Se ha hecho click");
  //   confirm("¿Estás de acuerdo?")
  //   ? console.log("OK")
  //   : console.log("NO!!");;
  const respuesta = confirm("¿Seguro?");
  if (respuesta) {
    console.log("Estas de acuerdo");
  } else {
    console.log("No estas de acuerdo");
  }
});
const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    console.log(`Tu nombre es ${nombre}.`);
  } else {
    console.log("El campo nombre es null");
  }
});
const lista = [
  {
    nombre: "Marc",
    edad: 21,
  },
  {
    nombre: "Benavent",
    edad: 61,
  },
  {
    nombre: "Amaya",
    edad: 76,
  },
];
console.log(lista);
console.table(lista);