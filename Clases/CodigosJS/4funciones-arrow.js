// Las funciones tambien son objetos. Entonces es posible asignar una declaracion de funciona a una variable. Se ejecuta igual que una función normal.
// Función "Normal":
function mostrar(params){
    console.log(params);
}
// Función "Arrow":
const mostrarArrow = (params) => {
    console.log(params);
}
mostrar('HOLA MUNDO NORMAL');
mostrarArrow('HOLA MUNDO ARROW');

// Funciones de una sola instruccion, las llaves son opcionales, el return está implícito.
const mostrarSigleLine = (params) => console.log(params);
mostrarSigleLine('HOLA MUNDO SINGLE');
// Ejemplo de dos de esto mismo
const promediar = (a,b,c,d) => (a+b+c+d)/4;
const p = promediar(4,8,4,7);
console.log(p);

//Para declarar múltiples variables:
const sumar = (a,b) => a+b;
let op1 = 56, op2 = 34;
let suma = sumar(op1,op2);
console.log(`La suma de ${op1} más ${op2} es igual a ${suma}`);

//CALLBACKS:

//JavaScript nos permite hacer que una funcion reciba como parametro una referencia a otra funcion.
const ejecutar = unaFuncion => unaFuncion();
const saludar = () => console.log('Saludos cordiales...');
ejecutar(saludar);

//Donde puedo usar una variable, puedo tambien usar directamente el contenido de esa variable.
const ejecutarAnonima = (unaFunction, params) => unaFunction(params);
const saludar2 = nombre => console.log(`saludos, ${nombre}`);
ejecutarAnonima(saludar2, 'terricola');

// Ejercicio en clases
console.log('EJERCICIO:');
function operacion(num1,num2,callbackF) {
    return callbackF(num1,num2);
} //por convencion el callback es el ultimo parametro y reciben 2 parametros
const sumaa = (num1,num2) => num1 + num2;
const resta = (num1,num2) => num1 - num2;
const division = (num1,num2) => num1 / num2;
const modulo = (num1,num2) => num1 % num2;

console.log(`resultado de la suma: ${operacion(5,6,sumaa)}`);
console.log(`resultado de la resta: ${operacion(5,6,resta)}`);
console.log(`resultado de la division: ${operacion(5,6,division)}`);
console.log(`resultado del modulo: ${operacion(5,6,modulo)}`);

// Para no hacer un funcion que llame a otra funcion y que esa llame a otra y asi sucesivamente creando un infierno de los callbacks, se crearon las PROMESAS:
function dividir2(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividendo / divisor)
        }
    })
}
dividir2(10,0)
    .then(resultado => {
        console.log(`resultado: ${resultado}`);
    })
    .catch(error => {
        console.log(`error: ${error}`);
    })

// PROMESAS pero mas picantes, es decir encadenamiento de promesas:
Promise.resolve(10)
.then(x => x+1)
.then(x => x*2)
.then(x =>{
    if(x == 23){
        throw 'Error';
    } else return x
})
.then(x => x +' wtf')
.then(x =>{
    console.log(x);
})
.catch(error => {
    console.log(error);
})