/* const http = require('http');
const server = http.createServer(); //creamos el servidor con este simple metodo
server.on('request',procesa); //prende el servidor y llama a un callback (procesa)
server.listen(3000); // que se ponga a escuchar el puerto 3000
console.log('Servidor arrancado');

function procesa(request, response){
    let url = request.url;
    console.log(`URL solicitada:${url}`);
    response.end("Hola");
} */

//request significa petición en ingles

//Hola mundo de los servidores
/* const http = require('http');

const server = http.createServer ((request,response) => {
    response.end('Hola Mundo');
})

const connectedServed = server.listen(8080, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', connectedServed.address().port);
    // para mostrar el hola mundo hay que entrar a localhost:8080
}) */

// se puede crear otro servidor en el mismo puerto y llamar al otro servidor desde otra consola y va a dar error ya que no se puede usar el mismo puerto porque esta ocupado.

// Ejercicio 1:
const http = require('http');
let fecha = new Date();
let horas = fecha.getHours();
const server = http.createServer (
    (request, response) => {
        if(horas > 6 && horas <= 12){
            response.end('Buenos días');
        } else if (horas > 12 && horas <= 19){
            response.end('Buenas tardes');
        } else if (horas > 19 && horas <= 5){
            response.end('Buenas noches');
        }
    }
)
const connectedServed = server.listen(8080, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', connectedServed.address().port);
})