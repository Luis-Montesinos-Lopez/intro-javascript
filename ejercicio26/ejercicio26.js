/**
 *  Ejercicio 26    REVISAR EL LUNES
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray(coleccion) {
  let array=[];
  for(let i=0;i<=coleccion.length-1;i++){
    array[i]=coleccion[i]*coleccion[i]*coleccion[i];
    return `El cubo de ${coleccion[i]} es ${array[i]}`;
  }
  
}

module.exports = { cuboNumerosArray };
