/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */

function generarArray(lenght,numero) {
  let array=Array.from({length:lenght},()=>Math.floor(Math.random()*numero));
  return array;
}

function calculosArray() {
  let numPos=[];
  let suma=0;
  let sumaPos=0;
  for(let i=0;i<array.length;i++){
    suma+=array[i];
    if(array[i]>0){
      sumaPos+=array[i];
      numPos.push(array[i]);
    }
  }
  return`Los números mayores a 0 son: ${numPos.length}, el promedio de los números positivos es: ${sumaPos/numPos.length} y el promedio de todos los números es: ${suma/array.length}`;
}

module.exports = { generarArray, calculosArray };
