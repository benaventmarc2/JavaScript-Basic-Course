/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/
let height_cm = parseInt(180);
console.log(height_cm);

let height_m = parseFloat(1.80);
console.log(height_m);

let weight_kg = parseFloat(70.5);
console.log(weight_kg);

let height_up_rounded = Math.ceil(height_m);
console.log(height_up_rounded);

let height_down_rounded = Math.floor(height_m);
console.log(height_down_rounded);

let max_value = Number.MAX_VALUE + 1;
console.log(max_value === Number.MAX_VALUE);
