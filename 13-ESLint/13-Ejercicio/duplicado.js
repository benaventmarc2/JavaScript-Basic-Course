// Metodos mas utilizados con cadenas de caracteres

//Como obtener la longitud de un string
var str = "Hola soy un string"
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() "substr() este esta obsoleto con las nuevas actualizaciones"
var slice_str = str.slice(0, 6)
console.log(slice_str)

var substring_str = str.substring(5, 10)
console.log(substring_str)

// Reemplazar parte del contenido de una cadena de texto
var cadena = "Hola mi nombre es Marc"
console.log(cadena)
cadena = cadena.replace("Marc", "Benavent")
console.log(cadena)

var texto_largo =
  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
console.log(texto_largo.replace("el", "5"))

//Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/el/g, "5"))
