// se usa el modulo nativo fs (file System o sistema de archivos). Solo aplica para Node.js porque desde el navegador no es posible manipular archivos dado que sería muy inseguro.
// primero debemos importarlo con la funcion require.

const fs = require('fs');

// operaciones sincronicas: readFileSync (lectura); writeFIleSync (escirutra); appendFileSync (actualizacion de un archivo); unlinkSync (borrado de un archivo); mkdirSync (creacion de una carpeta).

const data = fs.readFileSync('./fyh.txt','utf8');
console.log(data);

// si la ruta empieza por './' significa que esta llamando a la carpeta donde esta nuestro programa.

fs.writeFileSync('./uahhh.txt','Viva la Birra!'); //crea el archivo uahhh.txt
fs.appendFileSync('./uahhh.txt','\nESTO ES UN AGREGADO'); // agrega contenido a uahhh.txt
fs.unlinkSync('./uahhh.txt'); // borrar el archivo uahhh.txt

// TAREA: con manejo de errores Try y Catch (que se usan cuando es sincronico)
console.log('\nTAREA:');

let fecha = Date(); // hace un string
//let fecha2 = new Date(); // hace un archivo de tipo date

try {
    fs.writeFileSync('./fechayhora.txt',fecha);
    let fechayhora = fs.readFileSync('./fechayhora.txt','utf8');
    console.log(fechayhora,'\n');
}catch(err) {
    console.log(err);
}