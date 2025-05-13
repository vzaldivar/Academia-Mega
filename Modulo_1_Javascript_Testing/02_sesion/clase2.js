var edad = 75;
let edad1 = 50;
const edad2 = 20;

if (edad < 18) {
    console.log("Eres menor de edad");
} else if ( edad >= 18 && edad < 65 ) {
    console.log("Eres un adulto");
} else {
    console.log("Eres un adulto mayor");
}

let numero = prompt("Ingresa un numero:");
if (numero > 0) {
    console.log("El numero es positivo");
} else if (numero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}

for (let i= 1; i<=5; i++) {
    console.log(`Interacion numero ${i}`);
}

let contador = 1;
while (contador <= 5) {
    console.log(`Contador en ${contador}`);
    contador++;
}

let num = prompt("Ingresa un numero");
num = Number(num);
if (num % 2 === 0 {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

