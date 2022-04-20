>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    PUG JS

- Pug JS es un otor de plantillas que nos permite utilizar archivos estaticos como plantillas, enviar valores para reemplazar variables dentro de las mismas y transformar estos archivos en paginas HTML que se envian al cliente.
- Express permite trabajar con muchos motores de plantillas, entre ellos Pug. Es muy facil de implementar, solo basta con un par de lineas de codigo para indicarle a express que use Pug JS como motor de plantillas.
>> Para esto abiremos la terminal: npm install pug
>> Luego se crea el tipico directorio para las plantillas: views
>> Luego app.set('views','./views'); para indicar el directorio de plantillas.
>> Luego app.set('view engine', 'pug'); para indicar que pug sera el motor de plantillas.

* En Pug se utiliza la tabulacion para definir a que etiqueta pertnece. Si, tambien es un pseudo HTML.

* Desafío genérico 1:
1) Realizar un servidor que reciba por query params (mediante la ruta get '/datos') el valor
que debe representar una barra de medición (usando el tag de html meter).
2) Asimismo recibirá además los valores mínimos y máximos permitidos y el título que se
pondrá por arriba de la barra, en un elemento h1 en color azul (debe permitir formato
HTML).
Ejemplo de petición:
http://localhost:8080/datos?min=10&nivel=15&max=20&titulo='Medidor'
3) Como respuesta a este request, el servidor devolverá al frontend una plantilla armada
con los datos recibidos.
4) Utilizar pug integrado a express, manejando una plantilla común y una particular con la
representación requerida.