// Funcion declarativa
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}
saludar("Victor");

// funcion anonima
let saludar1 = function(nombre) {
    console.log(`Hola, ${nombre}`);    
}
saludar1("Gabriel");

let mensajeGlobal = "Hola a afuera";

function ejemploScope() {
    let mensajeLocal = "Hola a dentro";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
}

ejemploScope();

//Clousure

function contador() {
    let cuenta = 0
    return function () {
        cuenta++;
        return cuenta;
    }
}

const incrementar = contador();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());

// Ejercicio
// Crear una funcion que devuelva otra funcion que multiplica por un numero especifico.

function multiplicar(factor) {
    return function(numero) {
        return numero * factor;
    }
}
const duplicar = multiplicar(2);
const triplicar = multiplicar(3);

console.log(duplicar(5));
console.log(triplicar(5));
