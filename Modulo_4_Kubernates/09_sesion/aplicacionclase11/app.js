const express = require('express');
 
const app = express();
 
const PORT = process.env.PORT || 3000;
 
app.get('/', (req, res) =>{
    res.send("¡¡¡Hola mundo desde Kubernetes!!! <br> Author: Victor Gabriel Zaldivar Gonzalez");
});
 
app.listen(PORT, () =>{
    console.log(`Servidor de Node escuchando en el puerto ${PORT}`);
});
 