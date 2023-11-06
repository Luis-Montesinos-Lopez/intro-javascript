/**
 * Ejercicio 52
 *  Rellenar un array con una longitud 10 y
 *  numeros aleatorios entre 1 y 15.
 *  Posteriormente, hacer un algoritmo que reciba este array
 *  aleatorio y un numero introducido por parametros que nos diga
 *  si este numero esta incluido en el array o no. El algoritmo retornara
 *  true si se encuentra el numero y false si no;
 */

function generateRandomArray() {
 let array=Array.from({length:10},()=>Math.floor(Math.random()*14)+1);
 return array;
}

function findNumberInArray(array,num) {
  let esta=false;
  for(let i=0;i<array.length;i++){
    if(array[i]==num){
      esta=true;
    }
  }
 return esta;
}

module.exports = { findNumberInArray, generateRandomArray };
console.log(generateRandomArray());