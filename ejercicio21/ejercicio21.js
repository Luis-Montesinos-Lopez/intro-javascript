/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

function maxMinAverageUntilZero(coleccion) {
  let arrayAux = [];
  let sum = 0;
  let max = -Infinity;
  let min = Infinity;

  for(let i = 0; i < coleccion.length; i++){
    if(coleccion[i] > 0){
      arrayAux.push(coleccion[i]);
      if(coleccion[i] > max){
        max = coleccion[i];
      }
      if(coleccion[i] < min){
        min = coleccion[i];
      }
      sum += coleccion[i];
    } else {
      break;
    }
  }

  let average = sum / arrayAux.length;

  return `average: ${average}`, `max: ${max}`, `min: ${min}`;
}

module.exports = { maxMinAverageUntilZero };
