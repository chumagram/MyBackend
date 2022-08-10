// no se instala ninguna dependencia
const cluster = require('cluster');
// acceder a la acantidad de nucleos de la CPu
const numCPUs = require('os').cpus().length;
// Para poder crear un servidor
const http = require('http');

const PORT = 8080;

// 1 proceso principal --> va a crear sub procesos o procesos hijos
// n procesos hijos --> n = cantidad de nucleos de procesador de mi maquina


if(cluster.isMaster) { // isPrimary
    console.log(`PID Master ${process.pid}`);

    // for que recorre la cantidad de procesadores
    for (let index = 0; index < numCPUs; index++) {
        cluster.fork()
    }

    // cluster es un proceso y le declaramos un worker ( el que hace el trabajo por el nucleo principal)
    cluster.on('exit', worker => {
        console.log(`PID Worker ${worker.process.pid} died`);
    })
} else { // entra al else cuando es un worker
    //crear un servidor
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(cluster.process.id);
    }).listen(PORT)

    console.log('Servidor esta escuchando en el puerto 8080');
}