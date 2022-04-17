//Si la funcion no tiene nombre es una función anónima. Se le puede pasar argumentos o parametros que pueden ser hasta 255. El cuerpo de la función, lo que hace digamos... se llama instrucciones.
//Las funciones anónimas se usan para:
//Asignar la misma función anónima a una variable:
let foo = function(){let i = true };
//Devolver una función anónima desde otra función:
function foo2 () {return function(){let j = false}};
//Invocar inmediatamente una fucnión anónima:
(function(){let foo3 ='';})() //Esto es una IIFE (Immediately Invocked Function Expressions) y son funciones que se ejecutan tan pronto como se definen.

//Scope: indica el ambito o alcance de ejecución. En el los valores y las expresiones son visibles o pueden ser referenciados
//Closure: (clausura) funcion que guarda referencias del estado adyacente, es decir, permite acceder al ambito de una funcipon exterior desde una función interior. Las clausuras se crean cada vez que una función es creada:
function crearGritarNombre(nombre){
    const signosDeExclamacion = '!!!';
    return function(){
        console.log(`${nombre}${signosDeExclamacion}`);
    }
}
const gritarCH = crearGritarNombre('CoderHouse');
gritarCH(); //es el Closure que incorpora la funcion anonima junto con el parametro nombre y el string !!!
//Template Strings: o plantillas de texto, son cadenas de literales de texto incrustadas en el código fuente que permiten su interpolación mediante expresiones. Se ponen entre comillas invertidas o backticks y soportan texto multilinea:
let String1 = 'String de Ejemplo';
console.log(`Este es un texto con Template Strings
Véase que permite los saltos de línea.
Para insertar una variable se usa ${String1} y listo...`);

console.log('\nEjercicio #1');
let listaLlena = [1,2,3,4,5,6];
let listaVacia = [];
function mostrarLista(lista){
    if (lista.length === 0){ // Alternativa: if (!lista.length) esto da TRUE porque es 0 negado si está vacía.
        console.log('La lista esta vacía');
    }
    else console.log(lista);
}
mostrarLista(listaVacia);
mostrarLista(listaLlena);

console.log('\nEjercicio #2');
let listaLlena2 = [56,324,534];
(function(listita){
    if (!listita.length){
        console.log('La lista esta vacía');
    }
    else console.log(listaLlena2);
})(listaVacia);//})(listaLlena2);

/*********************************************************************************************/
console.log('\nEjercicio #3'); //EJERCICIO TRES DE LA CLASE 2

function crearMultiplicador(num1){
    return function(num2){
        return num1 * num2;
    }
}
let nume1 = 5;
let nume2 = 10;
let multiplicador = crearMultiplicador(nume1);
let resul = multiplicador(nume2);
console.log('Multiplicación:',resul);

function duplicar(r){
    console.log('Duplicado:',r*2);
};
duplicar(resul);

function triplicar(r){
    console.log('Triplicado:',r*3);
};
triplicar(resul);