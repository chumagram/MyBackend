// el enrutador es una instancia para manejar solicitudos o mini aplicaciones. Para usar un ROUTER es parecido a usar el app.get,etc per o se lo reemplaza con el router que va a tener los urls en el:

const express = require('express'); //llamamos a express
const {Router} = express; //definimos que la instancia router con express

const app = express(); // definimos el objeto de express como app
const router = Router(); // definimos al objeto router como router

router.get('/recurso',(request,response)=>{
    response.send('OK GET');
})

router.post('/recurso',(request,response)=>{
    response.send('OK POST');
})

app.get('/productos',(request,response)=>{
    response.send('Lista de productos');
})

app.use('/api', router);

const server = app.listen(8080,()=>{
    console.log('La aplicacion express esta escuchando por el puerto 8080');
})

/*
- Si queremos enviar archivos estaticos como imagenes, videos, etc. se utiliza la funcion de middleware incorporada express.static.
- Esta funcion recibe como paramtreo el nombre del directorio (por lo general llamado public) que conttiene los archivos estaticos. Adentro de public se crean las carpetas images, css, js, entre otras.
- Al igual que la función RUTER, STATIC puede ser invocada varias veces, trayendo distintas carpetas.
- Antes de llamar al archivo estatico, en la url se antepone el phat de acceso '/static'. Esto es para no hacer publico donde tengo mis archivos... puede llegar a ser peligroso por cuestiones de seguridad:
        app.use('/static', express.static('public'));
- El path absoluto: siempre es preferible usar éste, el path absoluto del directorio al que desea dar el servicio:
        app.use('/static', express.static(__dirname + '/public'));
*/

/*  MIDDLEWARES:
    Las middleware se ejecutan entre los request y los response y se van ejecutando de forma secuencial, entonces si uno falla no se va a ejecutar el siguiente middleware. Cada middleware tiene su riquest y su response y un next que es para pasar al siguiente middleware.
*/