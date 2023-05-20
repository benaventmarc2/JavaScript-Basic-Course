class Persona {
  // Private -> #
  #nombre;
  #edad;
  getEdad;

  // Protected -> _
  _isDeveloper = true;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  saludo() {
    console.log(`Hola :3, soy ${this.nombre} y tengo ${this.edad}`);
  }
  getNombre() {
    return this.#nombre;
  }
  getEdad() {
    return this.#edad;
  }
  setEdad(newEdad) {
    this.#edad = newEdad;
  }
}

const persona = new Persona("Marc", 70);
console.log(persona);
persona.saludo();
persona.getNombre();
persona.getEdad();
persona.setEdad(122);
