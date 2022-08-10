const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuariosCollection = 'usuarios';

const UsuarioSchema = new Schema ({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    usuario: {type: String, require: true, max: 100},
    password: {type: Number, require: true}
})

module.exports = mongoose.model(usuariosCollection, UsuarioSchema);