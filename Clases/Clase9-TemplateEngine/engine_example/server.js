// el siguiente codigo es un ejemplo de implementacion de un motro de plantilla muy simple para la representacion de archivos NTL.

const express = require('express')
const fs = require('fs');
const PORT = 8080;
const app = express();

//defino el motor de plantilla. indica la extencion (ntl)
app.engine('ntl',function(filepath,options,callback){
    //usamos file sistem para leer el archivo
    fs.readFile(filepath,function(err,content){
        if (err){ // si hay un error
            return callback(new Error(err)); //retorna al callback err
        } else {
            const rendered = content.toString()
            .replace('#title#','' + options.title + '')
            .replace('#message#','' + options.message + '')
            .replace('^^titulo$$','' + options.titulo + '')
            .replace('^^mensaje$$','' + options.mensaje + '')
            .replace('^^autor$$','' + options.autor + '')
            .replace('^^version$$','' + options.version + '');
            return callback (null, rendered); //null porque no hay error
        }
    });
});
app.set('views','./views'); // views estan en la carpeta views
app.set('view engine','ntl'); // la view engine es de tipo ntl

app.get('/',function(req,res){
    res.render('index', {title:'Hey', message:'Hello there!'}); // voy a renderizar index
})

let mostrar = {
    titulo: "Game Of Thrones",
    mensaje: "Esta es una serie que termino muy muy mal che...",
    autor: "George R. R. Martin",
    version: 1123
}

app.get('/cte1',function(req,res){
    res.render('challenge2.ntl', mostrar);
})

const server = app.listen(PORT, ()=>{
    console.log(`Aplicación escuchando por el puerto ${server.address().port}`);
})