//Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir estos números
// de forma descendente
/**
 * Ejercicio 46
 * Algoritmo que reciba tres numeros y los retorne en orden descendente. Los debera retornar en un objeto:
 * {1: X, 2: Y, 3: Z}
 */

function imprimirDescendente(a,b,c) {
  let numeros=[{i:0},{i:0},{i:0}];
  if(a>b&&b>c){
    numeros[0].i=a;
    numeros[1].i=b;
    numeros[2].i=c;

  }
  return numeros;
}
console.log(imprimirDescendente(50,30,10));

module.exports = { imprimirDescendente };
