"use strict";

var lista = [2, 3, 4, 5, 6, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
}); //este origen.js pertenece a ES6 ya que usa const y las nuevas arrow functions y queremos que babel lo covnierta a JS5 para ello definimos un script en el packaje.jsom: