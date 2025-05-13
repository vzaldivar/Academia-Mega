/*
console.log("Inicio");
console.log("Tarea 1");
console.log("Tarea 2");

setTimeout(() => {
    console.log("Esto se ejecutara despues de 5 segundos");
    console.log("Tarea 3");
}, 5000)

console.log("Tarea 4");
console.log("Tarea 5");
console.log("Fin");

// Promesas
console.log("Bienvenido a la pagina web");
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let exito = true;
        if (exito) resolve("El clima de hoy es ...");
        else reject("Promesa rechazada");
    }, 5000)
})

// Async / Await
*/

async function obtenerPokemones() {
    const container = document.getElementById("pokemon-container");

    for(let i=1; i<31; i++) {
        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            //const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${i}`);

            console.log(respuesta);        
            const data = await respuesta.json();
            console.log(data);

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}"></img>
                <h2>${data.name}</h2>
                `;
            container.appendChild(card);
        } catch(error) {
            console.log("Error al obtener el Pokemon",error);
        }
    }
}
obtenerPokemones();
