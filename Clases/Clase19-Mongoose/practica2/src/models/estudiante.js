const mongoose = require('mongoose');
const estudiantesCollection = 'estudiantes';

const EstudianteSchema = new mongoose.Schema ({
    nombre: {type: String, require: true, max: 20},
    apellido: {type: String, require: true, max: 20},
    edad: {type: Number, require: true, max: 100},
    dni: {type: String, require: true, max: 9},
    curso: {type: String, require: true, max: 2},
    nota: {type: Number, require: true, max: 10},
    ingresos: {type: Boolean}
},{versionKey: false },{strict: false})

module.exports = mongoose.model(estudiantesCollection, EstudianteSchema);