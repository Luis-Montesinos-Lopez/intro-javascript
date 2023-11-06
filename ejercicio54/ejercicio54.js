//Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos de 2 hasta N

/**
 * Ejercicio 53
 * Diseñar un algoritmo que lea un numero N y retorne cuantos numeros primos hay desde 2
 * hasta N
 */



function getPrimeNumbers(numero) {
  let numPrimos=[];
  let cuentaPrimos=0;
  for(let i=2; i<=numero;i++){
    if(i%2!=0&&i%3!=0){
      numPrimos.push(i);
      cuentaPrimos++;
    }
  }console.log(numPrimos);
  return `Por debajo de ${numero} hay ${cuentaPrimos} numeros primos`;
  
}


console.log(getPrimeNumbers(47));

module.exports = { getPrimeNumbers };
