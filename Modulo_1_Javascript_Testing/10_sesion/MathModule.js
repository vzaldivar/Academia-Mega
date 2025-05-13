const MathModule = (function() {
    console.log("Hola Victor");    
    // Variables privadas
    const PI = 3.1416;

    // Funciones Privadas
    function cuadrado(x) {
        return x * x;
    }

    // Funciones Publicas
    return{
        areaCirculo(radio) {
            return PI * cuadrado(radio);
        },
        suma( a, b) {
            return a + b;
        }
    }

})();

console.log(MathModule.areaCirculo(2));
console.log(MathModule.suma(2,3));




