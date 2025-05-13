document.getElementById("formularioNotas").addEventListener("submit", function(e) {
    e.preventDefault();

    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;

    console.log(nota1);

    const resultado = document.getElementById("resultado");

    try {
        const promedio = calcularPromedio(nota1, nota2, nota3);

        console.log(promedio);
        resultado.textContent= `El promedio es: ${promedio}`;
        resultado.style.color = "green";
    } catch(error) {
        console.log(error.message);
        resultado.textContent = error.message;
        resultado.style.color = "red";
    }
    
})

function calcularPromedio(n1, n2, n3) {
    console.log("Clculando Promedio");

    if([n1, n2, n3].some(isNaN)) {
        throw new Error("Todas las notas deben de ser numeros validos");
    }

    if([n1, n2, n3].some(n=>n<0 || n>10)) {
        throw new Error("Las notas deben de estar entre 0 y 10");
    }

    return (n1 + n2 + n3) / 3
}

