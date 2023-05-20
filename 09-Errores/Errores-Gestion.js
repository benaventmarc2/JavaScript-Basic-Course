const miFuncion = (val) => {
  if (typeof val === "number") return 2 * val;
  throw new Error("El valor debe ser de tipo number");
};
console.log(miFuncion(4));

const elDoble = miFuncion(2);
const numero = "1";

try {
  console.log("Esta ejecutándose de manera correcta");
  const doble = miFuncion(numero);
  console.log(elDoble);
} catch {
  console.error("¡Err!");
} finally {
  console.log("Esto se ejecutara siempre :3");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
