const express = require('express');
const app = express(); // app va a ser un objeto de express
const PORT = 8080;
const handlebars = require('express-handlebars');

//NOTA: handlebars ya no son una función, sino que un objeto:
app.engine(
    "hbs", //nombre referencia la platilla (se usa luego en set)
    handlebars.engine({ //para poder utilizar el engine, son las configuraciones
        extname:".hbs", //extension a utilizar (en lugar de handlebars, por defecto)
        defaultLayout: 'index.hbs', //plantilla principal
        layoutsDir: __dirname + "/views/layouts", //ruta a la plantilla pricipal
        partialsDir: __dirname + "/views/partials/" //ruta a las platillas parciales
    })
);

//establecemos el motor de plantilla que se utiliza
app.set('view engine', 'hbs'); // se usaran como engine a los .hbs
//establecemos directorio donde se encuentran los archivos de plantillas
app.set('views','./views'); // las views estan en la carpeta views
//espacio publico del servidor
app.use(express.static("public")); //el static se refiere a la carpeta public

let fakeApi = () => [
    { name: 'Katarina', lane: 'midlaner'},
    { name: 'Jayce', lane: 'toplaner'},
    { name: 'Heimerdinger', lane: 'toplaner'},
    { name: 'Azir', lane: 'midlaner'},
    { name: 'Miss', lane: 'botlaner'}  
];

app.get('/', function (req, res) {
    res.render('main', { suggestedChamps: fakeApi(), listExists: true });    
}) // aqui le ordenamos que lea el app.engine, el index.hbs y lo del main lo va a poner dentro del index.hbs mas precisamente dentro del {{{body}}}. Esto es por defecto, en ningun lado se indica que tengo un body, esto se va renderizando de forma automatica con handlebars

app.get('/productos', function (req, res) {
    res.render('productos', {});    
})

const server = app.listen(PORT, err => {
    if(err) throw new Error(`Error en servidor ${err}`);
    console.log("Aplicacion express escuchando en el puerto " + server.address().port);
});