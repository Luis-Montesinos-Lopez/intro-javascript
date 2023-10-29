/**
 * Ejercicio 36
 * Crear dos arrays de numeros enteros de longitud 10 rellenos con
 * numeros aleatorios del 1 al 20. El algoritmo nos retonara ambos arrays
 * creados con numeros al azar y un tercer array que contenga en cada indice
 * la multiplicacion de los indices en esa posicion de los dos arrays anteriores.
 *
 * Es decir si nos generase arrays aleatorios de [2,3,4] y [4,5,6], el algoritmo retornaria
 * [2,3,4], [4,5,6] y [8,15,24]
 */

function multiplicarElementosArray(array1,array2) {
  const array1=Array.from({length:10}, ()=>Math.floor(Math.random() * 20) + 1);
  const array2=Array.from({length:10}, ()=>Math.floor(Math.random() * 20) + 1);
  let multiArray=[];
  for(let i=0;i<array1.length;i++){
    multiArray[i]=array1[i]*array2[i];
  }
  return`${array1},${array2},${multiArray}`;
}

module.exports = { multiplicarElementosArray };
