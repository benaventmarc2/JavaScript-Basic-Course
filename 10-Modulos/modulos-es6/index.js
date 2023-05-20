// import {suma, factorial, multiplica, eleva, nombre} from "./modulos/matematicas.js";
import * as mat from "./modulos/matematicas.js";
import getAuthor from "./modulos/literatura.js";
const sum = mat.suma(4, 12);
console.log(sum);

const potencia = mat.eleva(2, 12);
console.log(potencia);

console.log(mat.nombre);
console.log(getAuthor());
