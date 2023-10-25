/**
 *  Ejercicio 7
 *  Construir un algoritmo que reciba la cantidad de dinero entregado
 *  y el coste del producto. Debera calcular el cambio que se entregara
 *  al cliente. Debes tener en cuenta que el cliente podria entregar
 *  una cantidad de dinero insuficiente.
 */

function cambioCliente(a,b) {
 if(a>=b){
    return a-b;
 }else{
    return `pago insuficiente`;
 }
}

module.exports = { cambioCliente };
