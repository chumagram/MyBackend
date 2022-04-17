// Console es un objeto que proporciona acceso a la consola de depuración del navegador. Este objeto nos proporciona los siguientes métodos:
console.log('Hola Mundo Normal');
console.error('Hola Mundo con Error');
console.warn('Hola Mundo con Warning');
//console.clear(); //Limpia la consola

//Declarar variables: Global i - j k local
let i = 0;
function foo(){
    i = 1;
    let j = 2;
    if(true){
        let k = 3;
        console.log(i);
        console.log(j);
    }
}
foo();
//console.log(k); // k is not defined

//Con 'let' una variable puede ser reasignada, con const no es posible y se obtiene un TypeError. Que no se puedan reasignar no significa que que sean inmutables. Ej de mutabilidad:
const user = {name: 'Gonzalo', lastname: 'Gramajo'};
user.name = 'Manolo';
console.log(user.name);
//const user2 = 'Juan';
//user = 'Manolo'; // TypeError

console.log('Ejercicio de repaso: ');
let nombre = 'Pepe';
let edad = 25;
let precio = 99.90;
let series = ['Dark','Mr.Robot','Castlevania'];
let peliculas = [{nombre:'Kill Bill',año:2003,protagonista:'Bill'},{nombre:'Fast & Furious',año:2005,personaje:'Toreto'},{nombre:'Matrix',año:1999,protagonista:'Keanu'}];
console.log(nombre, edad, precio);
console.log(series);
console.log(peliculas);
edad++;
console.log('Edad incrementada:',edad);
series.push('Game Of Thrones');
console.log('Series incrementadas:',series);