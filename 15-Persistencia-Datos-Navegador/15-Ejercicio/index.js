// Crea un nuevo proyecto de Node

// 1 - Crea un fichero index.html (utiliza el comando "!")

// 2 - Crea un fichero index.js

// 3 - Integra el fichero index.js en el html

// 4 - En el fichero index.js:

// 5 - Crea una variable con tu nombre
var nombre = "Marc";
// 6 - Crea una variable con tu apellido
var apellido = "Benavent";

// 7 - Crea un objeto con tu nombre y tu apellido
var persona = JSON.stringify({nombre: "Marc", apellido: "Benavent"});

// 8 - Almacena el objeto anterior en la SessionStorage
// sessionStorage.setItem("sessionpersona", persona);

// 9 - Almacena el objeto anterior en la LocalStorage
// localStorage.setItem("localpersona",persona);

// 10 - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
var fechaCaducidad = new Date();
fechaCaducidad.setTime(fechaCaducidad.getTime() + 2 * 60 * 1000)
// document.cookie = "caducidad=" + encodeURIComponent(persona) + "; expires=" + fechaCaducidad.toUTCString(); 

// 11 - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// 12 - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// 13 - Observa cómo la SessionStorage está vacía

// 14 - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// 15 - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado