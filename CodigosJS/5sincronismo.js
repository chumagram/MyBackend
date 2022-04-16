// Las operaciones que son bloqueantes, hacen que se espere hasta que se finalice de ejecutar una funcion para pasar a la siguiente tarea o linea de codigo. Esto genera que exista una ejecución sincrona.
// Las operaciones que son no bloqueantes permiten que una vez iniciadas, el programa pueda continuar con la siguiente intruccion, sin esperar a que finalice la enterior. Esto genera una ejecución asincronica.

// cuando se trata de ejecucion asicronica, solo sabemos en que orden comenzaran su ejecucion las instrucciones pero no sabemos en que momento ni que orden terminaran de ejecutarse.

// TIMERS:
// setTimeout: recibe un callback y lo ejecuta despues de un numero especifico de milisegundos. Trabaja sobre un modelo asincrono no bloqueante.

/* console.log('Comienza la ejecución');
setTimeout(() => {
    console.log('hola mundo');
}, 1000);
console.log('finaliza la ejecución'); */

// setInterval: también recibe un callback pero a diferencia de setTimeout() lo ejecuta una y otra vez cada vz que se cumpla la cantidad de milisegundos indicada. Tambien es asincrono no bloqueante. Para salir del setInterval hay que llamar a clearInterval(). el return del setInterval se usa como argumento en el clearInterval.

/* let temporizador = 0;
let intervalo = setInterval(() => {
    console.log(temporizador);
    temporizador++;
    if(temporizador==11){
        clearInterval(intervalo);
    }
},500)  */
//esto no se recomienda por cuestiones de que se compila y se ejecuta el codigo en cada intervalo de tiempo. Enconsecuencia esto es una falla eval() -> riesgo de seguridad

let temporizador = 0;
let intervalID = setInterval(myCallback, 500, 'Iteración', 'wtf');
function myCallback(a, b)
{
    console.log(a, b, temporizador);
    temporizador++;
    if(temporizador == 11){
        clearInterval(intervalID);
    }
}