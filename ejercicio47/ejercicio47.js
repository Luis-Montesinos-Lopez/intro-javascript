/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

function ordenar(array) {
  let ordenMayor=array[0];
  for(let i=0;i<array.length;i++){
    for(let k=0;k<array.length-1;k++){
      if(array[k]<array[k+1]){
        ordenMayor=array[k+1];
        array[k+1]=array[k];
        array[k]=ordenMayor;

      }
    }
  }
  return array;
}
console.log(ordenar([3, 2, 1, 4, 7, 5, 8, 9, 7]));

module.exports = { ordenar };
