let numeros = [1, 2, 3, 4];

function datos (nums){

    if (!nums || typeof(nums) !== 'string'){

    }

    let prom, suma

    nums.forEach( element => {
        suma =+ element
    })
    prom = suma / nums.length;

    let max = Math.max(nums)

    let min = Math.min(nums)

    return {
        datos: {
            numeros: nums,
            promedio: prom,
            maximo: max,
            minimo: min,
            ejecutable: process.title, // el lo que se esta ejecutando
            pid: process.pid
        }
    }
}

console.log(datos(numeros));