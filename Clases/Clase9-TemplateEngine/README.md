        
        TEMPLATE ENGINE

>> Un Template Engine es parte de un template que termina renderizando en un template como tal y devuelve un html renderizado.
>> Tienen un papel fundamental los MVC, que son modelos vista controlador. Separan los datos de su presentación. Separa el codigo del programador del codigo del diseñador web. Las plantillas templates son una proximación a resolver este problema.
>> Llega un endpoint o cualquier metodo, el controlador lo recibe y acorde al request va a invocar el MVC. Por ejemplo en la API de productos, cuando se solicita todos los productos, hay un modelo que va a definir el esquema de producto que yo quiero, envia los datos de los productos a una vista y luego se entrega al cliente.
* El motor de plantiullas lee un archivo de texto que contiene la presentacion ya preparada en un lenguaje Pseudo HTML e inserta en el la informacion dinamica que le ordena el controlador (la Cde MVC) que representa la parte que une la vista con la información.
* Permiten el trabajo en equipo en backend y frontend. Permiten reutilizar secciones de código y reutilizarlas en diferentes lugares.
* Si no se usan los motores de plantillas, afecta a la velocidad, aumenta el riesgo de HTML mal formado y más dificil de obtener certificaciones.
* Hay muchísimos Template Engines, nosotros utilizaremos HANDLEBARS. Cuando se ejecuta la plantilla, las expresiones de Handlebars se reemplazan con valores de un objeto de entrada.
>> Página para probar el HABDLEBARS: https://handlebarsjs.com/examples/simple-expressions.html
Este es útil para ir viendo si nuestro HTML va a responder como necesitamos.
>> CDN es un lugar externo a nosotros que no es necesario descargarlo para que lo usemos en enuestra pagina. La ventaja es que no se descargan librerias pero la desventaja es que si la url del CDN deja de funcionar, es parte del codigo en tu pagina va a dejar de funcionar tambien.

> DESAFIO 1 en index.html


        Motor de plantilla custom para express

* se usa el metodo app.engine(ext,callback) para crear el motor de plantilla, propio.
* app.set('views',path) especifica la carpeta de plantillas.
* app.set('viex engine', name) registra el motor de plantillas.

(VER EL ENGINE EXAMPLE que es al mismo tiempo el desafio generico 2)

**************************************************************************************

Desafio generico 2:

Desarrollar un motor de plantillas custom para un servidor basado en express, que permita
representar en la ruta '/cte1' el siguiente archivo de plantilla 'plantilla1.cte':

<h1>^^titulo$$</h1>
<p>^^mensaje$$</p>
<b>^^autor$$</b>
<hr>
<i><b>Versión: ^^version$$</b></i>

Con los datos que provienen desde un objeto:

{
titulo: (algún título en string),
mensaje:(algún mensaje en string),
autor: (algun autor en string),
version: (numerica)
}

Este motor personalizado debe permitir parsear objetos de datos con claves
dinámicas y volcar sus valores en la plantilla seleccionada.
Crear otra ruta '/cte2' que represente otro archivo de plantilla: 'plantilla2.cte' con
los datos nombre, apellido y la fecha/hora provenientes de un objeto.

***************************************************************************************

HANDLEBARS en NODE.JS

+ tambien se puede crear hasndlebars en el servidor, en nuestra aplicacion. No es necesario hacer un motor de plantillas casero como estamos haciendo...
- Handlebars puede usar en el browser (cliente) o en el servidor. Esto permite usar una SPA, es decir Single Page Apliccation, son websites de una sola pagina que va renderizando todo en base a los que va haciendo el cliente.
* Para utilizar handlebar se usa npm install express-handlebars.
>> La extension por defecto es el .hbs y se pone un bigote por defecto en el visual studio.