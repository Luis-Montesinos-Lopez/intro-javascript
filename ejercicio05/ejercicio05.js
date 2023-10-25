/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */

function determinarTipoNumero(num) {
  if(num==""){
    return `No has introducido un numero`
  }else{
    if (num==null) {
        return `El numero es nulo`
    } else {
        if(num<0){
            return `El numero es negativo`
        }else {
            return `El numero es positivo`
        }
    }
  }
}

module.exports = { determinarTipoNumero };
