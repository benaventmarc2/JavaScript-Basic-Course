// Crea un nuevo fichero JS que contenga las siguientes líneas

// 1 - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// function fibonacciSequence(num) {
//   var sequence = [];
//   if (num >= 1) {
//     sequence.push(1);
//   }
//   if (num >= 2) {
//     sequence.push(1);
//   }
//   for (var i = 2; i < num; i++) {
//     var nextNum = sequence[i - 1] + sequence[i - 2];
//     sequence.push(nextNum);
//   }
//   return sequence;
// }

// Fibonacci Optimizado

function fibonacciSequence(num) {
  var sequence = [];
  for (var i = 0; i < num; i++) {
    if (i < 2) {
      sequence.push(1);
    } else {
      var nextNum = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNum);
    }
  }
  return sequence;
}

var num = 6;
var result = fibonacciSequence(num);
console.log(result);

// 2 - Ejecuta la depuración de VSCode para visualizar la ejecución de la función
