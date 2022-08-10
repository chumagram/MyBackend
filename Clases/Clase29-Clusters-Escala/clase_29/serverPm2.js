// Es como el forever + server cluster (es el mismo codigo que para forever)
const express = require('express');
const app = express();
const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    res.send('Servidor express ' + process.pid)
})

app.listen(PORT, err => {
    if (!err) console.log('Escuchando');
})

// 1 - Comando para inicializar con pm2: 
//* pm2 start serverPm2.js
// 2 - Levantar la lista de procesos (se ven los watchs (los que se pueden ver)):
//* pm2 monit
// para levantar un servidor con watch habilitado:
//* pm2 start serverPm2.js --name"ServerCoder2" --watch -- 8082
// 3 - para ver los errores, si es que los hay, no se ven como en el node normal, asi que nos va a parecer oslo que hay un error en el cuadro y para ver se usa logs:
//* pm logs

// fork es un solo subproceso, cluster levantamos subprocesos por los n nucleos del procesador.
// pm2, al igual que forever, si le matamos un subproceso o se detiene, va a tratar de reiniciarlo y lo va a volver a levantar. Para parar un subproceso:
//* pm2 stop [ nombre || pid ]
// si quiero eliminar uno
//* pm2 delete [ nombre || pid ]
// si quiero eliminar todos
//* pm2 delete 'all'