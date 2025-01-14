/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

function sumaNPrimerosNumerosPares(N) {
  let sumaPares=0;
  for(i=N;i<N*3;i++){
    if(i%2==0){
      sumaPares+=i;
    }
  }
  return sumaPares;
}
console.log(sumaNPrimerosNumerosPares(11));

module.exports = { sumaNPrimerosNumerosPares };
