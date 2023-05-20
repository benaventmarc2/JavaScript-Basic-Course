class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola :3, soy ${this.nombre} y tengo ${this.edad}`);
  }
}

const nueva_persona = new Persona("Marc", 11, false);
console.log(nueva_persona);
nueva_persona.saludo();

// Instanceof nos dice que tipo de instancia es como typeof

