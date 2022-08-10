const mongoose = require('mongoose');
const Model = require('./src/models/estudiante');
const URL = 'mongodb://localhost:27017/Colegio';

const estudiantes = [
    {nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota:7},
    {nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota:8},
    {nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6},
    {nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    {nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9},
    {nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5},
    {nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota:4},
    {nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2},
    {nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9},
    {nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2}
];

const unEstudiante = {nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota:7};

class CRUDmutante {
    constructor(Modelo,url){
        this.Model = Modelo;
        this.url = url;
    }
    
    //CONEXION HACIA LA BASE DE DATOS
    async connectToDB(){
        try {
            await mongoose.connect(this.url,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        } catch (error) {
            console.log(error);
        }
    }

    //CREATE
    async createToDB(toAdd){
        try {
            this.connectToDB();
            let added = await this.Model.insertMany(toAdd);
            console.log('Documents added:',added);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log('ERROR...',error);
        }
    }

    //READ
    async readToDB(){
        try {
            this.connectToDB();
            console.log('READ ALL');
            let list = await this.Model.find({});
            console.log(list);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //READ ALL WITH TIMESTAMP
    async readAllTimeStamp(){
        try {
            this.connectToDB();
            let list = await this.Model.find({});
            list.forEach(element => {
                console.log(`${element} -> FECHA DE CREACIÓN: ${element._id.getTimestamp().toLocaleDateString()} ${element._id.getTimestamp().toLocaleTimeString()}`);
            });
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //READ ORDENADO (INT/STRING)
    async readOrdered(params){
        try {
            this.connectToDB();
            console.log('READ ORDENADO');
            let list = await this.Model.find({}).sort(params);
            console.log(list);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //READ PORSION MENOR O MAYOR CON POSICIÓN (INT)
    async readPortion(params, position, cant){
        try {
            this.connectToDB();
            console.log('READ MENOR SEGUN PARAMETRO');
            let list = await this.Model.find({}).sort(params).skip(position).limit(cant);
            console.log(list);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //READ SEGUN CONDICIÓN (STRING)
    async readConditional(condition){
        try {
            this.connectToDB();
            console.log('READ SEGÚN CONDICIÓN');
            let list = await this.Model.find(condition);
            console.log(list);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //READ ORDENADO Y SESGADO ( Z - A / max - min)
    async readOrdBiased(params,biesed){
        try {
            this.connectToDB();
            console.log('READ SEGUN CONDICIÓN');
            let list = await this.Model.find({}).sort(params).select(biesed);
            console.log(list);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //UPDATE
    async updateToDB(toFind, change){
        try {
            this.connectToDB();
            let estudianteUpdate = await this.Model.updateOne(toFind,{$set: change});
            console.log(estudianteUpdate);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //UPDATE ALL
    async updateAll(toChange){
        try {
            this.connectToDB();
            let changes = await this.Model.updateMany(toChange);
            console.log(changes);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //UPDATE MANY
    async updateManyToDB(filter,toChange){
        try {
            this.connectToDB();
            console.log('FILTER:',filter,' - TO CHANGE:',toChange);
            let changes = await this.Model.updateMany(filter,{$set: toChange});
            console.log(changes);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //DELETE
    async deleteToDB(objectParam){
        try {
            this.connectToDB();
            console.log('DELETE');
            let estudianteDelete = await this.Model.deleteOne(objectParam);
            console.log(estudianteDelete);
            mongoose.connection.close(function(){process.exit(0)});
        } catch (error) {
            console.log(error);
        }
    }

    //DELETE ALL
    async deleteAll(){
        try {
            this.connectToDB();
            await this.Model.deleteMany({});
            mongoose.connection.close(function(){process.exit(0)});
            console.log('Documents deleted from');
        } catch (error) {
            console.log(error);
        }
    }

    //PROMEDIO SEGUN CONDICIÓN, SINO, TOTAL
    async average(condition){
        try {
            this.connectToDB();
            let average;
            if (condition) {
                average = await this.Model.aggregate(
                    [
                        {$match:condition},
                        {$group:{_id:'_id',total: {$avg: '$nota'}}}
                    ]
                );
            } else {
                average = await this.Model.aggregate(
                    [
                        {$group:{_id:'_id',total: {$avg: '$nota'}}}
                    ]
                );
            }
            mongoose.connection.close(function(){process.exit(0)});
            console.log(average[0].total);
        } catch (error) {
            console.log(error);
        }
    }
    
}

/********************************** PRUEBAS DE LOS MÉTODOS *********************************/
let colegio = new CRUDmutante(Model,URL);
//colegio.connectToDB();
//colegio.createToDB(estudiantes);
//colegio.readToDB();
//colegio.readOrdered({nombre: 1})
//colegio.updateToDB({nombre: 'Daniel'},{nota: 9});
//colegio.deleteToDB({apellido: 'Fernández'});
//colegio.deleteAll();

/********************************** PROYECTO GENÉRICO 1 *************************************/
//Los estudiantes ordenados por orden alfabético según sus nombres
//colegio.readOrdered({nombre: 1});

//El estudiante más joven
//colegio.readPortion({edad: 1},0,1); //propiedad: 1/-1 (descendente/ascendente), posición, cantidad

//Los estudiantes que pertenezcan al curso '2A'
//colegio.readConditional({curso:{$eq:'2A'}}); //lte es para seleccionar los Curso:'2A'

//El segundo estudiante más joven
//colegio.readPortion({edad: 1}, 1, 1); //propiedad: asc/des (1/-1), posicion, cantidad

//Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).
//colegio.readOrdBiased({apellido:-1},{nombre:1 ,apellido:1, curso:1, _id:0});

//Los estudiantes que sacaron 10
//colegio.readConditional({nota:10});

//El promedio de notas del total de alumnos
//colegio.average();

//El promedio de notas del curso '1A'
//colegio.average({curso:{$eq:'1A'}});

/********************************** PROYECTO GENÉRICO 2 *************************************/
//Actualizar el dni del estudiante Lucas Blanco a 20355875
//colegio.updateToDB({nombre: 'Lucas', apellido: 'Blanco'},{dni: '20355875'})

//Agregar un campo 'ingreso' a todos los documentos con el valor false
//colegio.updateAll({ingresos: false});

//Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
//colegio.updateManyToDB({curso:'1A'},{ingresos: true});

//Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v
//colegio.readConditional({nota:{$gte: 4}});

//Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v

//Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true

/* Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo __v) junto a su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS.
Por ejemplo:
{"_id":"604df61b5e39a84ba41313e4","nombre":"Fabio","apellido":"Pieres","edad":39,"
dni":"4315388","curso":"1B","nota":9,"ingreso":false} -> Fecha creación: 14/3/2021
08:40:11 */
colegio.readAllTimeStamp();