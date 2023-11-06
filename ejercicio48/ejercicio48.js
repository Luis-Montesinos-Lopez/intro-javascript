/**
 * Ejercicio 48
 * Crear un algoritmo que reciba un array de nombres y los devuelva ordenados
 * alfabeticamente.
 *
 * Pista: Los datos alfanumerico (strings) tambien se pueden comparar con los operadores
 * '<' y '>'
 */

function ordenarArray(array) {
  let arrayOrdenado=[];
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
    if(array[j]>array[j+1]){
      arrayOrdenado=array[j+1];
      array[j+1]=array[j];
      array[j]=arrayOrdenado;
    }
  }
} return array;}

module.exports = { ordenarArray };
