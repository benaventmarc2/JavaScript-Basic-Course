// Metodos dee cadenas de texto - 3
// https://regexr.com
let texto_largo =
  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";

console.log(texto_largo.match(/el/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("sf"));
console.log(texto_largo.includes("se"));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Lorem"));

// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("."));
