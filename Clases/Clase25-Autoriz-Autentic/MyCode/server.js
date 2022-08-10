const express = require('express');
const expressSession = require('express-session');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.render('index.html');
});

// Levantar el servidor
const connectedServer = app.listen(PORT, () => {
    console.log("Server HTTP con WEBSOCKETS escuchando en el puerto " + PORT);
});
connectedServer.on('error', error => console.log (`Error en el servidor: ${error}`));