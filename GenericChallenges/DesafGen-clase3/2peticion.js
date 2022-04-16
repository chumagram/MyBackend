const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

function peticion (objeto){
    let str = '';
    objeto.forEach(element => {
        str = str + element.nombre + ', '
    });
    return str.substring(0,str.length-2)
}

const total = (objeto) => {
    let totality = 0;
    objeto.forEach(element => {
        totality += element.precio;
    });
    return parseFloat(totality.toFixed(3));
}

const promedio = (objeto) => {
    let aux = (total(objeto)/objeto.length).toFixed(2);
    return parseFloat(aux);
}

const menorPrecio = (objeto) => {
    let array = [];
    objeto.forEach(element => {
        array.push(element.precio);
    });
    let min = Math.min(...array);
    let omg;
    objeto.forEach(element => {
        if(element.precio == min){
            omg = element;
        }
    });
    return omg;
}

const mayorPrecio = (objeto) => {
    let array = [];
    objeto.forEach(element => {
        array.push(element.precio);
    });
    let max = Math.max(...array);
    let omg;
    objeto.forEach(element => {
        if(element.precio == max){
            omg = element;
        }
    });
    return omg;
}

const toditoTodo = (objeto) => {
    let todaso = {
        nombres: peticion(objeto),
        total: total(objeto),
        promedio: promedio(objeto),
        minPrecio: menorPrecio(objeto),
        maxPrecio: mayorPrecio(objeto)
    };
    return todaso;
}

console.log(peticion(productos));
console.log(total(productos));
console.log(promedio(productos));
console.log(menorPrecio(productos));
console.log(mayorPrecio(productos));
console.log(toditoTodo(productos));