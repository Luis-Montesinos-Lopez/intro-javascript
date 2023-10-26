/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

function sumOrMultiply(a,b,c) {
 if(isNaN(a)||isNaN(b)||isNaN(c)||a==""||b==""||c==""){
    return `Has introducido uno o varios caracteres no validos`;
 }else{
    if(a<0){
        let producto= a*b*c;
        return producto;
    }else{
        let suma =a+b+c;
        return suma;
    }
 }
}

module.exports = { sumOrMultiply };
