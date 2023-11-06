/**
 *  Ejercicio 26    REVISAR EL LUNES
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */function cuboNumerosArray(coleccion) {
  let array=``;
  for(let i=1;i<=coleccion;i++){
    array=`El cubo de ${i} es ${i*i*i}`;
    return array;
  }
 
 }
 console.log(cuboNumerosArray(10));

// function cuboNumerosArray(coleccion) {
//   let array=[];
//   for(let i=1;i<=coleccion;i++){
//     array.push(`El cubo de ${i} es ${i*i*i}`);  
//   }
//   return array;
// }
// console.log(cuboNumerosArray(10));
module.exports = { cuboNumerosArray };
