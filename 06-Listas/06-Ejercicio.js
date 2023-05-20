// 1- Crea un archivo JS que contenga las siguientes líneas

// 2- Una variable que contenga la lista de la compra (mínimo 5 elementos)
var listaCompra = ["leche", "huevos", "pasta", "carne", "fruta"];
// 3- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de girasol");
console.log(listaCompra);
// 4- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);
// 5- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
var pelicula1 = {
  titulo: "Aladdin",
  director: "Guy Ritchie",
  fecha: "2019",
};
var pelicula2 = {
  titulo: "Buscando a Nemo",
  director: "Andrew Stanton",
  fecha: "2003",
};
var pelicula3 = {
  titulo: "El señor de los anillos: El retorno del rey",
  director: "Peter Jackson",
  fecha: "2003",
};
var listaPeliculas = [pelicula1, pelicula2, pelicula3];

// 6- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
var peliculasFecha = listaPeliculas.filter((i) => i.fecha > 2010);
console.log(peliculasFecha);

// 7- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
var directores = listaPeliculas.map(i => i.director);
console.log(directores);

// 8- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
var titulos = listaPeliculas.map(i => i.titulo);
console.log(titulos);

// 9- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
var concatList = directores.concat(titulos);
console.log(concatList);

// 10- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
var concatList2 = [...directores, ...titulos];
console.log(concatList2);