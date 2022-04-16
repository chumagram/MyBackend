// El modulo File System, permite el uso de promesas. Recibe los mismos parametros que en su forma Sincronica y se encarga internamente de abrir y cerrar el archivo una vez finalizado su uso:

const fs = require('fs');

// Leo el archivo usando sintaxis then/catch
function leerTC(){
    fs.promises.readFile('./fechayhora.txt','utf-8')
    .then(contenido => {
        console.log(contenido);
    })
    .catch(err => {
        console.log('Error de lectura:', err);
    })
}
leerTC();

// Leo el mismo archivo usando sintaxis async/await
async function leerAA(){
    try {
        const contenido = await fs.promises.readFile('./fechayhora.txt','utf-8');
        console.log(contenido);
    }
    catch (err) {
        console.log('Error de lectura:', err);
    }
}
leerAA();

// Escribri o sobreescribir un archivo con promesas
async function escribir(){
    try {
        await fs.promises.writeFile('./fechayhora.txt','TEXTO ESCRIBIDO CON UN PRIMISE MAN');
        console.log('Guardado con exito!');
    }
    catch (err){
        console.log('Error al escribir el archivo...');
    }
}
escribir();

// Agregar contenido a un archivo para
async function agregar(){
    try {
        await fs.promises.appendFile('./fechayhora.txt','\nTEXTO AGREGADO AL ARCHIVO CON PROMISE');
        console.log('Agregado!');
    }
    catch (err){
        console.log('Ocurrio un error al agregar al archivo...');
    }
}
agregar();

// Renombrar un archivo con promesas - NANA RENOMBRAR NANA
let rutaVieja = './fechayhora.txt';
let rutaNueva = './archivorenombrado.txt';
async function renombrar(rutaVieja, rutaNueva){
    try {
        await fs.promises.rename(rutaVieja, rutaNueva);
        console.log('Renombrado con exito!');
    }
    catch (err){
        console.log('Error al renombrar el archivo');
    }
}
renombrar(rutaVieja,rutaNueva);