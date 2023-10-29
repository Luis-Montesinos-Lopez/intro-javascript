/**
 *  Ejercicio 27    REVISAR EL LUNES
 *  Desarrollar un algoritmo que imprima la tabla de multiplicacion
 *  del numero N introducido por parametros. Para N = 13, el output seria:
 *  13,26....130;
 */

function tablaNumero(n) {
  for(let i=1;i<=n;i++){
    return n*i;
  }
}

module.exports = { tablaNumero };
