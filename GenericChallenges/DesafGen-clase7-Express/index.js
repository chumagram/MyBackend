const express = require('express');
const PORT = 8080;
const app = express();

const frase = 'Hola mundo como estan';

let errNaN = {error: "El parámetro no es un número"};
let errRango = {error: "El parámetro está fuera de rango"};

//NODEMON: nodemon index.js para ejecutar el servidor siempre.
app.listen(PORT,()=>{
    console.log('Servidor escuchando en el puerto:',PORT);
})

app.get('/',(request,response)=>{
    response.send('<h1>Directorio Raíz</h1>');
})

app.get('/api/frase',(request,response) => {
    response.send(frase);
})

app.get('/api/letras/:num', (request,response) => {
    let num = parseInt(request.params['num'])-1;

    if(num <= frase.length){
        console.log(frase[num]);
        response.send(frase[num]);
    } else if(num <= 0 || num > frase.length){
        response.send(errRango);
    } else {
        response.send(errNaN);
    }
})

app.get('/api/palabras/:num',(request,response)=>{
    let arr = frase.split(' ');
    let num = parseInt(request.params['num'])-1;
    
    if(num < 0 || num > arr.length){
        response.send(errRango);
    } else if (num < arr.length){
        console.log(arr[num]);
        response.send(arr[num]);
    } else {
        response.send(errNaN);
    }
})