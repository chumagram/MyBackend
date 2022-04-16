/* 1) Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres
rutas en estos formatos (Ejemplo con números 5 y 6)
a) Ruta get '/api/sumar/5/6
b) Ruta get '/api/sumar?num1=5&num2=62)
c) Ruta get '/api/operacion/5+6
2) No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' +
(post/put/delete) según corresponda. Probar estas rutas con Postman, veriﬁcando que
el servidor responda con el mensaje correcto.
El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión/error
que correspondan. */

const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let objeto = [];

app.get('/',(request,response)=>{
    response.send('<h1>Directorio Raíz</h1>');
})

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log('Servidor escuchando en el puerto:',PORT);
});

// acá 5 y 6 se pasan como params
app.get('/api/sumar/:num1/:num2',(request,response)=>{
    let num1 = parseInt(request.params.num1);
    let num2 = parseInt(request.params.num2);
    console.log(num1,num2);
    response.send((num1+num2).toString());
});

// acá 5 y 6 se reciben como query, no params
app.get('/api/sumar',(request,response)=>{
    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);
    console.log(num1,num2);
    response.send((num1+num2).toString());
});

// aca se recibe una suma en la url
app.get('/api/operacion/:str',(request,response)=>{
    let str = request.params.str;
    let arr = str.split('+'), suma = 0;
    console.log(arr);
    arr.forEach(element => {
        suma += parseInt(element);
    });
    response.send(suma.toString());
});

// uso del post
app.post('/api',(request,response)=>{
    console.log('Lo que contiene el Body:');
    objeto.push(request.body);
    console.log(objeto);
    response.send('OK POST');
});

// uso del put
app.put('/api',(request,response)=>{
    let id = parseInt(request.query.id);
    console.log('ID pasada:',id);
    objeto.forEach(element => {
        if(id == element.id){
            element.info = request.body.info;
            console.log(objeto);
            response.send('OK PUT');
        } else response.send('Error');
    });
});

// uso del delete
app.delete('/api',(request,response)=>{
    let id = parseInt(request.query.id);
    let indexObject = objeto.findIndex(element =>
        element.id === id
    );
    if(indexObject){
            objeto.splice(indexObject, 1);
            response.send('OK DELETE');
        } else response.send('Error');
    console.log(objeto);
});