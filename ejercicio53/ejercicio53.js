/**
 * Ejercicio 53
 * Usar una funcion para calcular el promedio recibiendo un array.
 */

function getAverage(array) {
  let average=0;
  for(let i=0;i<array.length;i++){
    average+=array[i];
  }
  return average/array.length;
}

module.exports = { getAverage };
