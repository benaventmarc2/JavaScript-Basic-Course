// Inheritance -Herencia
class Persona {
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  saludo() {
    console.log(`Hola :3, soy ${this._nombre} y tengo ${this._edad}`);
  }
}

class Dessarrollador extends Persona {
  _lenguaje;
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this._lenguaje = lenguaje;
  }
  saludo() {
    //Overrides
    super.saludo();
    console.log(`Hola, soy un desarrollador de ${this._lenguaje} :3.`);
  }
}

const newDev = new Dessarrollador("Marc", 27, "JavaScript");
console.log(newDev);

// Polimorfismo
