// <!-- Crea un nuevo proyecto de Node

// 1 - Configura el proyecto para utilizar los módulos de ES6

// 2 - Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)

// 3 - En el entrypoint index.js, importa el módulo controller.js

// 4 - El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

// 5 - Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

// 6 - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde -->

import * as controller from "./controller/controller.js";
import chalk from 'chalk';
const sum = controller.suma(1, 2);
console.log(sum);

const sum2 = controller.suma(4,5)
console.log(sum2);

const mult = controller.multiplica(sum, sum2);
console.log(chalk.green(mult));
