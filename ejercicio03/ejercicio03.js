/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

function compareThreeNumbers(a,b,c) {
 if(a>b && a>c){
    return a;
 }else if(b>a&&b>c){
    return b;
 }
 else if(c>a&&c>b){
    return c;
 }else if(a==b&&b==c){
    return `iguales`;
 }
}

module.exports = { compareThreeNumbers };
