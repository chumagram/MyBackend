// las funciones fs asincronas son como las sincronas pero sin el Sync al final del nombre y ademas se pasa como parametro una funcion callback como parametro al ultimo. Son operaciones no bloqueantes. Para manejar los errores no es necesario el try/catch.
const fs = require('fs'); // incluimos el modulo

//LEER UN ARCHIVO
fs.readFile('./fyh.txt','utf-8',(error,contenido)=>{
    if(error) {
        console.log('ha ocurrido un error en la lectura');
    } else {
        console.log(contenido);
    }
})

//ESCRIBIR O CREAR UN ARCHIVO
fs.writeFile('./fechayhora.txt','TEXTO DE PRUEBA\n',error =>{
    if(error) {
        console.log('ha ocurrido un error al escribir el archivo');
    } else {
        console.log('guardado!');
    }
})

//AGREGAR CONTENIDO A UN ARCHIVO
fs.appendFile('./fechayhora.txt','TEXTO AGREGADO\n', error => {
    if(error) {
        console.log('Error al agregar texto');
    } else {
        console.log('guardado!');
    }
})

//BORRAR UN ARCHIVO
fs.unlink('./ruta', error =>{
    if(error) {
        console.log('error al borrar el archivo');
    } else {
        console.log('BORRADO!');
    }
})

//CREAR CARPETA
const path = require('path');
fs.mkdir(path.join(__dirname, 'Carpetuti'), error =>{
    if(error) {
        console.log('Fallo la creacion de la carpeta');
    } else {
        console.log('Carpera creada!');
    }
})

//LEER CONTENIDO DE UNA CARPETA
fs.readdir('./dir_archivo', (error,nombres) =>{
    if(error) {
        console.log('Ocurrio un error al leer la carpta');
    } else {
        console.log(nombres);
    }
})