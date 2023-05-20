// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// El archivo lo llamare 07-Ejercicio para seguir el estandar :3

// 1 - Un nuevo Set con los nombres de tu familia
var familyName = new Set(["Albert", "Leonora", "Taylor", "Juana", "Marc"]);
console.log(familyName);
// 2 - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familyName.add("Marc");
console.log(familyName);
// 3 - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familyName.add("JavaScript");
console.log(familyName);
