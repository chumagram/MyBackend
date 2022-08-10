const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuariosCollection = 'usuarios';

const UsuarioSchema = new Schema ({
    nombre: {type: String, require: true, max: 20},
    apellido: {type: String, require: true, max: 20},
    dni: {type: String, require: true, max: 9}
})

module.exports = mongoose.model(usuariosCollection, UsuarioSchema);