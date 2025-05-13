import {saludar, despedir} from "./saludar.js"
import {sumar, restar, multiplicar, dividir} from "./actividad.js"
import {obtenerfechaActual, obtenerhoraActual} from "./fechas.js";



const nombre = "Victor Zaldivar";

console.log(saludar(nombre));
console.log(despedir(nombre));

// Actividad
console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicar:", multiplicar(10, 5));
console.log("Dividir:", dividir(10, 5));
console.log("Dividir:", dividir(10, 0));

// Fechas
console.log("Fecha Actual: ", obtenerfechaActual());
console.log("Hora Actual: ", obtenerhoraActual());
