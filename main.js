// Importaciones diferentes formas
import multiplicar, { sumar, restar, PI } from './modulos/math.js';
import Usuario from './modulos/usuario.js';
import * as helpers from './modulos/helpers.js';

// Usando los módulos importados
console.log(sumar(5, 3)); // 8
console.log(restar(10, 4)); // 6
console.log(multiplicar(2, 6)); // 12
console.log(PI); // 3.1416

// Usando la clase
const usuario1 = new Usuario('Ana', 'ana@email.com');
console.log(usuario1.saludar()); // "Hola, soy Ana"

// Usando helpers
console.log(helpers.formatearFecha(new Date()));
console.log(helpers.generarId());

// También se pueden importar con alias
import { formatearFecha as formato } from './modulos/helpers.js';
console.log(formato(new Date()));