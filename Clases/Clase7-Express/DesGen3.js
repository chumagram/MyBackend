/* Considere la siguiente frase: ‘Frase inicial’
Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
1) GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
2) GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la
palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
3) POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al
ﬁnal de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra
agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
4) PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y
reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como
campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
5) DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada
(considerar que la primera palabra tiene posición #1).

Aclaraciones:
- Utilizar Postman para probar la funcionalidad.
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un
mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si
ocurriesen. */