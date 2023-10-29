/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retore el array introducido por
 * parametros invertido.
 */

function invertArray(array) {
  let arrayInvertido=[];
  for(let i=0;i<array.length;i++){
   arrayInvertido[i]=array[array.length-i-1];
  }
  return arrayInvertido
}

module.exports = { invertArray };
