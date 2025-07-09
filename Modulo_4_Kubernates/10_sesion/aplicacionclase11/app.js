const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hola mundo desde Kubernetes!!!!!!!!");
});

app.listen(PORT, () => {
    console.log(`Servidor de node escuchando en el puerto ${PORT}`)
});