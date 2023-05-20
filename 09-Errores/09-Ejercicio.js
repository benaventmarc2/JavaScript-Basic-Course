// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch

const logger = require("./logger");

function logErrors(a) {
  if (typeof a !== "number") {
    throw new Error("Type has to be a number");
  }
  return a * 2;
}
try {
  const num = 1;
  console.log(logErrors(num));
} catch (err) {
  logger.error("Error: " + err.message);
}
