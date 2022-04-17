// Fijarse en el orden de salida de los datos, es sincrónico (instrucciones bloqueantes)
const delay = ret => {for(let i=0; i<ret*3e6; i++);}
function hacerTarea(num) {
    console.log('haciendo tarea ' + num);
    delay(100);
}
console.log('\nInicio de tareas');
hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
hacerTarea(4);
console.log('fin de tareas');

// Ahora el codigo que sigue ya es asincrónico (instrucciones no bloqueantes)
function hacerTarea2(num2, cb) {
    console.log('haciendo tarea ' + num2);
    setTimeout(cb,100);
}
console.log('\nInicio de tareas pero con setTimeout');
hacerTarea2(1, () => {
    hacerTarea2(2, () => {
        hacerTarea2(3, () => {
            hacerTarea2(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otra tarea 1');
console.log('otra tarea 2');
console.log('otra tarea 3');

// ------------ TAREA: Asincronismo y Callbacks
//Desarrollar una funcion 'mostrarLetras' que reciba un string como parmetro y permita mostrar una vez por segundo cada uno de sus caracteres. Al finazlizar, debe invocar a la siguiente función que se le pasa tambien como prámetro: const fin = () => console.log('terminé'). Realizar tres llamadas a 'mostrar letras' con el mensaje '¡Hola!' y demoras de 0, 250 y 500 ms verificando que los mensajes de salida intercalen.

const fin = () => console.log('terminé');
function mostrarLetras(str,funcion,tiempo) {
    let iteracion = 0;
    let intervalo = setInterval(()=> {
        console.log(str[iteracion]);
        iteracion++;
        if(iteracion == str.length){
            funcion();
            clearInterval(intervalo);
        }
    },tiempo,str,funcion);
};

mostrarLetras('¡Hola!',fin,0);
mostrarLetras('¡Hola!',fin,250);
mostrarLetras('¡Hola!',fin,500);