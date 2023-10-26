/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */

function sum(a,b) {
    let resultado =a+b;
    return resultado;
 
}

function substract(a,b) {
    let resultado =a-b;
    return resultado;
}

function multiply(a,b) {
    let resultado =a*b;
    return resultado;
}

function divide(a,b) {
    let resultado =a/b;
    return resultado;
}

function total(a,b) {
 resultadoTotal=sum(a,b)+substract(a,b)+multiply(a,b)+divide(a,b);
 return resultadoTotal;
}

module.exports = { sum, substract, multiply, divide, total };
