const mongoose = require('mongoose');
const modelo = require('./models/usuario');

const toInsert = [
    { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
    { nombre: 'María', apellido: 'García', dni: '29575148' },
    { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
    { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
];

CRUD(toInsert, modelo);

async function CRUD(toAdd, model){
    try {

        //CONEXION HACIA LA BASE DE DATOS
        mongoose.connect('mongosh "mongodb+srv://cluster0.ar5vn.mongodb.net/myFirstDatabase" --apiVersion 1 --username chumagram',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        },err => {
            if(err) throw new Error(`Error de conexión a la base de datos ${err}`)
            console.log('Base de datos conectada');
        })

        //CREATE
        let added = await model.insertMany(toAdd);
        console.log('Documents added:',added);
        
        //READ ALL
        console.log('READ ALL')
        let usuarios = await model.find({})
        console.log(usuarios)
        
        //CLOSE CONEXION
        mongoose.connection.close(function(){process.exit(0)});

    } catch (e) {
        console.log(e);
    }
}