function suma( a, b ) {
    return a + b;
}

// Prueba Unitaria
console.log(suma(2,5));
console.assert(suma(2,5) === 5, "Error en la suma");

// Pruebas de integracion
//fetch("api...").then(res => res.json()).then(data => mostrarUsuario(data));

// Pruebas de Sistema
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    document.getElementById("resultado").textContent = `Hola ${nombre}`;
})

