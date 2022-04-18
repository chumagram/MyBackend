/*
 - Crear un servidor que permita manejar una lista de mascotas y personas. Debe
poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir
métodos para listar y para agregar recursos:
GET: devolverá la lista requerida en formato objeto.
POST: permitirá guardar una persona ó mascota en arrays propios en
memoria, con el siguiente formato:
Persona -> { "nombre": ..., "apellido": ..., "edad":... }
Mascota -> { "nombre":..., "raza":..., "edad":... } 
- Utilizar el Router de express para definir las rutas base, implementando las
subrutas en los métodos correspondientes.
- Probar la funcionalidad con Postman.
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un
mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si
ocurriesen.
*/

const express = require('express');
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

let personas = [{
    nombre:'Gonzalo',
    apellido:'Gramajo',
    edad:24}];
let mascotas = [{
    nombre: "Irú",
    raza: "Salchichita",
    edad: 2}]

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