/**
 * Ejercicio oddBallSum
 * Escribir una funcion que tome una lista de numeros y devuelva
 * la suma de todos los elementos impares.
 */

function oddball_sum(nums) {
  let sumaImpar=0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]%2!=0){
      sumaImpar+=nums[i];
    }
    
  }
  return sumaImpar;
}

module.exports = { oddball_sum };
