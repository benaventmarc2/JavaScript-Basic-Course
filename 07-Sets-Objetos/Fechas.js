// Trabajando con fechas
const fecha = new Date();
console.log(fecha);

// Los meses inicializan en 0
const fecha2 = new Date(1987, 10);
console.log(fecha2);

const fecha3 = new Date(0);
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15");
console.log(fecha4);

console.log(fecha > fecha2);
console.log(fecha < fecha2);

const fecha5 = new Date("October 13, 1979 12:15:15");
// Para comparar fechas debemos convertirlas a milisegundos
console.log(fecha4.getTime() === fecha5.getTime());

// Obtener dia mes y año de una fecha
// .getDate()
console.log(fecha4.getDate());
console.log(fecha4.getMonth() + 1);
console.log(fecha4.getFullYear());

//Truquito :3
console.log(fecha4.toLocaleDateString("en-GB"));
console.log(fecha4.toLocaleDateString("en-US"));