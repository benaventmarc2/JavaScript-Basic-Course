// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// 1 - La fecha de hoy
let fechaActual = new Date();
console.log(fechaActual.toLocaleDateString("en-GB"));

// 2 - La fecha de tu nacimiento
// (29/08/1996)
let fechaNacimiento = new Date(1996,(8 - 1),29); 
console.log(fechaNacimiento.toLocaleDateString("en-GB"));

// 3 - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let comparandoFechas = new Date().getTime() > fechaNacimiento.getTime();
console.log(comparandoFechas);
// 4 - Una variable que contenga el día de tu nacimiento
let dayBirth = fechaNacimiento.getDate();
console.log(dayBirth);
// 5 - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let monthBirth = fechaNacimiento.getMonth() + 1;
console.log(monthBirth);
// 6 - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let yearBirth = fechaNacimiento.getFullYear();
console.log(yearBirth);