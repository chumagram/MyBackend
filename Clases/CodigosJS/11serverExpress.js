const express = require('express'); // llmamos a el modulo express
const app = express(); // inicializamos la aplicacion de express
const PORT = 8080; // puerto que vamos a usar - en mayuculas porque es constante

const server = app.listen(PORT,()=>{ // le decimos que se quede escuchando en un puerto
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})

server.on("error", error => console.log(`Error en servidor ${error}`));