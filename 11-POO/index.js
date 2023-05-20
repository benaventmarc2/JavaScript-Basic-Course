const persona = {
  nombre: "Marc",
  edad: 27,
  isDeveloper: true,
  saludo: function () {
    console.log("Hola! :3");
  },
};
console.log(persona.saludo());

const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
  };
};
const nueva_Persona = creaPersona("Juan", 23, true);
console.log(nueva_Persona);
