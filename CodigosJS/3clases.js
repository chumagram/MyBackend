// Declaración de clases
class Cliente{ // Siempre empiezan con mayusculas.
    constructor(nombre, fecha, direccion){ // con "this" se declaran los atributos.
        this.nombre = nombre; // tambien se puede usae "super" para llamar al constructor de una superclase.
        this.fechaNacimiento = fecha;
        this.direccion = direccion;
    }
    static saludoCorto = 'hola'; // el static es como el const, no va cambiar
    saludoCompleto(){
        console.log(`buenaas, soy ${this.nombre}`);
    }
    saludoEstatico(){
        console.log(Cliente.saludoCorto);
    }
}
// New: permite crear una unstancia de un tipo de objeto definido por el usuario. Primero crea un objeto vacio, luego ejecuta el constructor de la clase en el contexto del objeto creado y finalmente retorna el objeto:
const c = new Cliente('Pepe','23/09/67','Alberdi 632');
console.log(`Nombre:${c.nombre}
Fecha de nacimiento:${c.fechaNacimiento}
Dirección:${c.direccion}`);
c.saludoCompleto(); // asi se usa!
c.saludoEstatico(); // el static es una variable que se puede usar solo llamando a la clase.

/****************************************************************************************************************/
console.log('\n\nEjercicio de Clases de la CLASE 2 del curso digamos...');
class Contador{
    constructor(nombre,cuenta=0){
        this.name = nombre;
        this.count = cuenta;
    }
    static globalCount = 0;
    obtenerResponsable(){
        console.log('Nombre del responsable de la cuenta:',this.name);
    }
    obtenerCuentaIndividual(){
        console.log('Cantidad contada por',this.name,':',this.count);
    }
    obtenerCuentaGlobal(){
        console.log('Cantidad contada por todos:',Contador.globalCount);
    }
    contar(){
        Contador.globalCount++;
        this.count++;
    }
}
const C1 = new Contador('Pepe');
const C2 = new Contador('Papa');
const C3 = new Contador('Pipi');
C1.contar();
C2.contar();C2.contar();
C3.contar();C3.contar();C3.contar();
C1.obtenerCuentaIndividual();
C2.obtenerCuentaIndividual();
C3.obtenerCuentaIndividual();
C1.obtenerCuentaGlobal();

//Una clase puede heredar de otra y... ¡tambien se herdan los métodos!
class Producto { // esto es una clase, al mismo tiempo es clase padre
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarPrecio(){
        console.log('Precio',this.precio);
    }
}
class ProductoVirtual extends Producto{ //esto en realidad es una sub-clase
    constructor(nombre,precio,plataforma){
        super(nombre,precio);
        this.plataforma = plataforma;
    }
    mostrarPrecioVirtual(){
        this.mostrarPrecio(); //se llama al metodo de la clase padre
        console.log('no está en dólar gamer');
    }
}
let P1F = new Producto('Play 5', 200000);
let P2V = new ProductoVirtual('GTA V', 1430, 'Steam');
console.log(P1F);
P1F.mostrarPrecio();
console.log(P2V);
P2V.mostrarPrecioVirtual();