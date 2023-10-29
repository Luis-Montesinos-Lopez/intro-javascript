/**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */

function timer(tiempo) {
  for(let i=tiempo-1;i>=-1;i--){
    if(i==-1){
      console.log(`Ring!!`)
  }else{
    console.log(i)
  }
}}

module.exports = { timer };
