function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
const numero = 10;
const resultadoFactorial = factorial(numero);
console.log(`El factorial de ${numero} es ${resultadoFactorial}`);

function factorial2(n) {
  let resultado = 1;
  let i = 1;
  while (i <= n) {
    resultado *= i;
    i++;
  }
  return resultado;
}
const numero2 = 10;
const resultadoFactorial2 = factorial2(numero);
console.log(`El factorial de ${numero2} es ${resultadoFactorial2}`);

function factorial(n) {
  let resultado = 1;
  let i = 1;
  while (true) {
    resultado *= i;
    if (i === n) {
      break;
    }
    i++;
  }
  return resultado;
}
const numero3 = 10;
const resultadoFactorial3 = factorial(numero);
console.log(`El factorial de ${numero3} es ${resultadoFactorial3}`);
