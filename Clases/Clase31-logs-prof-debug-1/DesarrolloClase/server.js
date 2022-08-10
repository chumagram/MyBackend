const express = require('express')
const log4js = require('log4js')
const compression = require('compression')
const winston = require('winston')

const PORT = 8080
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

if(process.env.NODE_ENV === 'production'){
    log4js.configure({
        appenders: {
            miLoggerConsole: { type: "console" },
            miLoggerFile: { type: 'file', filename: 'Logger1.log' }, 
            miLoggerFile2: { type: 'file', filename: 'Logger2.log' }
        },
        categories: {
            default: { appenders: ["miLoggerConsole"], level: "trace" },
            consola: { appenders: ["miLoggerConsole"], level: "debug" },
            archivo: { appenders: ["miLoggerFile"], level: "warn" },
            archivo2: { appenders: ["miLoggerFile2"], level: "info" },
            todos: { appenders: ["miLoggerFile", "miLoggerFile2"], level:"error" }
        }
    })
} else if (process.env.NODE_ENV === "development") {
    log4js.configure({
        appenders: {
            miLoggerConsole: { type: "console" },
            miLoggerFile: { type: 'file', filename: 'Logger1.log' }, 
            miLoggerFile2: { type: 'file', filename: 'Logger2.log' }
        },
        categories: {
            default: { appenders: ["miLoggerConsole"], level: "trace" },
            consola: { appenders: ["miLoggerConsole"], level: "debug" },
            archivo: { appenders: ["miLoggerFile"], level: "warn" },
            archivo2: { appenders: ["miLoggerFile2"], level: "info" },
            todos: { appenders: ["miLoggerFile", "miLoggerFile2"], level:"error" }
        }
    })
}

const logger = winston.createLogger ({
    level: 'warn' ,
    transports : [
        new winston.transports.Console({ level: 'verbose' }),
        new winston.transports.File({ filename: 'info.log', level: 'error' })
    ]
})

function saludar(){
    let saludo = 'Hola que tal ', saludoLarge;
    for (let index = 0; index < 1000; index++) {
        saludoLarge = saludoLarge + saludo;
    }
    return saludoLarge;
}

app.get('/saludo', (req, res) => {
    res.send(saludar());
})

app.get('/saludozip', (req, res) => {
    app.use(compression())
    res.send(saludar());
})

app.get('/log4js', (req, res) => {

    // imprime en consola y la categoria pasada como parametro
    //const logger = log4js.getLogger('archivo');
    const logger = log4js.getLogger('console'); 

    logger.trace('Log trace');
    logger.debug('Log debug');
    logger.info('Log info');
    logger.warn('Log warn');
    logger.error('Log error');
    logger.fatal('Log fatal');

    res.send({response: 'hola coders'})
})

app.get('/sumar', (req, res)=>{
    let {num1,num2} = req.query;
    logger.info
})

app.listen(PORT,(err)=>{
    if(!err) console.log(err);
    console.log('Servidor escuchando en el puerto:',PORT);
});