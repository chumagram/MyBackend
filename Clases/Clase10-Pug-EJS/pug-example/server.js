const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views','./views');
app.set('viez engine','pug'); // simplemente decimos el motor pug

app.get('/hello', function (req,res) {
    //let saludo = req.query.saludo;
    res.render('hello.pug',{mensaje: 'Usando Pug JS en Express', saludo:'otro atributo'});
})

app.get('/datos', function (req, res) {
    //let saludo = req.query.saludo;
    res.render('datos.pug', req.query);    
})
// provar con http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=%27Medidor%27

const server = app.listen(PORT,()=>{
    console.log("Aplicacion express escuchando en el puerto"+ server.address().port);
})