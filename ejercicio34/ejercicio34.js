/** Ejercicio 34    LO HE TENIDO QUE HACER CON FOR
 * a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
 * b) Crear un algoritmo que reciba un array con longitud 10 de numeros en el que utilizando un bucle
 *    while que calcule en que posicion del array se encuentra el numero que buscamos.
 *
 *  Si el numero aleatorio es 5 y tu array es [9,3,4,5,6,2,4] la solucion sera que has acertado
 *  al cuarto intento.
 */

function generateRandomNumber() {
  let numeroAleatorio=Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
}

function playGame(randomNumber, arrayNum) {
  let contador = 1;
    for(let i = 0; i < arrayNum.length; i++){
      if(arrayNum[i] == randomNumber){
        return `Exacto, has acertado en el ${contador} intento! el numero era el ${randomNumber}`;
      } else {
        contador++;
      }
    }
    return `Ninguno de los numeros introducido coincide con el creado aleatoriamente`;
}
module.exports = {
  generateRandomNumber,
  playGame,
};
