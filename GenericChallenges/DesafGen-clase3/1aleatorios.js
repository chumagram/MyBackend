let tomate = {};
function aleatorios(){
    let aux;
    for (let i = 0; i < 10000; i++) {
        aux = Math.floor(Math.random()*(19.999)+1);
        if (tomate[aux]){
            tomate[aux]++;
        } else tomate[aux] = 1;
    }
    console.log(tomate);
}
aleatorios();