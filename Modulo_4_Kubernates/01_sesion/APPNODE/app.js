const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hola mundo desde docker!!!!!!!<h1> <h2>Autor: Victor Gebriel Zaldivar Gonzalez</h2>");
});

app.listen(PORT, () => {
    console.log(`"Servidor de node escuchando en el purto ${PORT}`)
});



