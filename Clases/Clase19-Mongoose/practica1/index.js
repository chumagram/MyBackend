const mongoose = require('mongoose');
const model = require('./models/usuario');

CRUD();

async function CRUD(){
    try {

        //CONEXION HACIA LA BASE DE DATOS
        const URL = 'mongodb://localhost:27017/eCommerce'
        let rta = await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada');

        //CREATE
        console.log('CREATE');
        const usuario = {
            nombre: 'Juan', 
            apellido: 'Perez', 
            email: 'jp@g.com', 
            password:123456
        };
        const usuarioSaveModel = new model(usuario);
        let usuarioSave = await usuarioSaveModel.save();
        console.log(usuarioSave);

        //READ ALL
        console.log('READ ALL')
        let usuarios = await model.find({})
        console.log(usuarios)

    } catch (e) {
        console.log(e);
    }
}