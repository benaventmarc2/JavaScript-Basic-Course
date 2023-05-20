// Crea un nuevo fichero JS que contenga las siguientes líneas

// 1 - Una clase llamada "Estudiante" que tenga:
class Estudiante {
  // 2 - Una variable llamada nombre
  constructor(nombre) {
    this.nombre = nombre;
    // 3 - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    this.asignaturas = ["javascript", "html", "css"];
  }

  // 4 - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

// 5 - Crea una nueva instancia de "Estudiante"
var studen = new Estudiante("Marc");

// 6 - Haz la llamada al método obtenDatos
var info = studen.obtenDatos();
console.log(info);
