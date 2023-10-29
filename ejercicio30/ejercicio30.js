/**
 *  Ejercicio 30     REVISAR EL LUNES
 *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
 *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
 *  numero de filas por parametros.
 *  Si ponemos 4 los triangulos serán asi:
 *
 *  a) 1
 *     12
 *     123
 *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola(num) {
  let triangulo="";
  for(let i=1;i<=num;i++){
    for(let j=1;j<i;j++){
      triangulo+=j;
    }
    triangulo+=i+`\n`;
  }
  return triangulo;
}

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB(num) {
  let triangulo="";
  for(let i=0;i<num;i++){
    for(let j=0;j<i;j++){
      triangulo+=i+1;
    }
    triangulo+=i+1+`\n`;
  }
  return triangulo;
}

// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC(num) {
  let triangulo="";
  let contador =0;
  for(let i=0;i<=num;i++){
    for(let j=0;j<i;j++){
      triangulo+=contador+" ";
      contador++
    }
    triangulo+=`\n`;
  }
  return triangulo;
}

module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
