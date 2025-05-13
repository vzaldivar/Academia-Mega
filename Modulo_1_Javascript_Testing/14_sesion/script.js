function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log("Pasó");
            } else {
                console.error(`Falló: esperado ${expected} recibido ${actual}`);
            }
        }
    }
}

function esPar(n) {
    if (typeof n !== "number") return false;
    return n % 2 === 0;
}

// Test sin implementar la funcion aun
expect(esPar(2)).toBe(true);
expect(esPar(3)).toBe(false);