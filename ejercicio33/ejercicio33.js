/**
 *  Ejercicio 33     REVISAR EL LUNES
 * Crear un algoritmo que reciba un array de tamaño 10 y que imprima cada indice
 * junto con el valor al que corresponda. Debera retornarlo de esta forma:
 *  `El indice es X y su valor es Y`
 */

function arrayIndex() {
  for(let i=0;i<coleccion.length;i++){
   return`El indice es ${i} y su valor es ${coleccion[i]}`;
  }
}

module.exports = { arrayIndex };
