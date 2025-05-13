function guardarNota() {
    const texto = document.getElementById("nota").value.trim();
    console.log(texto);
    if (texto === "") return;

    let notas = JSON.parse(localStorage.getItem("notas")) || [];            
    notas.push(texto);

    localStorage.setItem("notas", JSON.stringify(notas));
    document.getElementById("nota").value = "";
    mostrarNotas();
}

function mostrarNotas() {
    const lista = document.getElementById("listaNotas");
    lista.innerHTML = "";
    let notas = JSON.parse(localStorage.getItem("notas")) || [];

    console.log(notas);
    notas.forEach((nota, index)=>{
        const li = document.createElement("li");
        li.innerHTML = `${nota} <span class="ingredient" onclick="borrarNota(${index})"> X </span>`;
        lista.appendChild(li);
    })
}

function borrarNotas() {
    localStorage.removeItem("notas");
    mostrarNotas();
}

function borrarNota(index) {
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    console.log(index);
    notas.splice(index, 1);
    localStorage.setItem("notas", JSON.stringify(notas));
    mostrarNotas();
}

mostrarNotas();