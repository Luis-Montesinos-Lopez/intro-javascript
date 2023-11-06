/**
 * Ejercicio 44
 * El usuario tiene el siguiente menu:
 *
 *  Seleccione el numero de una de las siguientes opciones:
 *  1: Sumar
 *  2: Restar
 *  3: Multiplicar
 *  4: Dividir
 *  5: Salir del programa.
 *
 * Debera generar un algoritmo que reciba por parametros 3 numeros. El primer numero,
 * sera la opcion elegida del menu, y los siguientes dos numeros se usaran en la operacion
 * correspondiente a la seleccionada del menu.
 *
 * EJEMPLO: Si introduce 1,2,4. El usuario recibira 6.
 */

function seleccionarNumeroMenu(a,b,c) {
  if(a==1){
    return b+c;
  }else if(a==2){
    return b-c;
  }else if(a==3){
    return b*c;
    }else if(a==4){
      return b/c;
    }else if (a==5){
      return `Has salido correctamente del programa`
    }else{
      return `No has introducido un numero correcto. El numero debe estar entre 1 y 5`
    }
  }


module.exports = { seleccionarNumeroMenu };
