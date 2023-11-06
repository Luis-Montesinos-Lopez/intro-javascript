// Ejercicio_51
// Comprobar si un numero N positivo es primo. Se dice que un numero entero
// positivo N es un numero primo si los unicos enteros positivos que lo
// dividen son exactamente 1 y N (el mismo).

/**
 * Ejercicio 51
 * Comprobar si un numero N positivo es primo. Se diec que un numero entero
 * positivo N es un numero primo si los unicos enteros positivos que lo dividen son
 * exactamente 1 y N (el mismo)
 */

function getPrimeNumber(n) {
  let primo=true;
  if(n%2==0||n%3==0){
    primo=false;
    return `El número ${n} es ${primo} primo`;

  }else{
    return `El número ${n} es ${primo} primo`;
  }
  
}
console.log(getPrimeNumber(52));
console.log(getPrimeNumber(8));
console.log(getPrimeNumber(3));
console.log(getPrimeNumber(7));
console.log(getPrimeNumber(29));
console.log(getPrimeNumber(71));
console.log(getPrimeNumber(95));
console.log(getPrimeNumber(67));
console.log(getPrimeNumber(15));
console.log(getPrimeNumber(37));


module.exports = { getPrimeNumber };
