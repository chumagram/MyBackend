/*
- Partiendo del ejercicio anterior, generar una carpeta pública 'public' en el
servidor, la cual tendrá un archivo index.html.
- En ese archivo se encontrarán dos formularios: uno que permita ingresar
mascotas y otro personas utilizando el método post
- Probar el ingreso de datos mediante los formularios y con Postman
- Verificar los datos cargados en cada caso. 
*/

const express = require('express');
const multer = require('multer');
const {Router} = express;

const app = express();
const router = Router();
const PORT = 8080;

const server = app.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en servidor ${error}`));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', router);
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

let personas = [{
    nombre:'Gonzalo',
    apellido:'Gramajo',
    edad:24
}];
let mascotas = [{
    nombre: "Irú",
    raza: "Salchichita",
    edad: 2
}]

router.get('/',(request,response)=>{
    response.sendFile(__dirname + '/public/index.html');
})

router.get('/mascotas',(request,response)=>{
    response.json(mascotas);
})
router.post('/mascotas',(request,response)=>{
    console.log(request.body);
    let agregar = request.body;
    mascotas.push(agregar);
    response.send(`Mascota agregada con éxito`);
})

router.get('/personas',(request,response)=>{
    response.json(personas);
})
router.post('/personas',(request,response)=>{
    console.log(request.body);
    let agregar = request.body;
    personas.push(agregar);
    response.send(`Persona agregada con éxito`);
})