/**
 * Ejercicio 39
 * Desarollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */

function sonIguales(a,b) {
  for(let i=0;i<a.length;i++){
    if(a[i]!=b[i]){
      return false;
     } 
  }
  return true;
}

module.exports = { sonIguales };
