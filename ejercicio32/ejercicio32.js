/**
 *  Ejercicio 32
 * El siguiente es el menu de un restaurante de bocadillos. Diseñar un algoritmo
 * capaz de leer el numero de unidades consumidas de cada alimento ordenado y
 * calcular la cuenta total. Vamos a suponer que los precios son fijos, es decir,
 * que son constantes.
 *
 * Bocadillo de jamon: 1,5e
 * Refresco 1,05e
 * Cerveza: 0,75e
 * Pan: 2e
 *
 * Debera retornar un string que diga lo siguiente: `El precio total es de X`
 */

function menuRestaurante(a,b,c,d) {
  const productos=1.5;
  const refresco=1.05;
  const cerveza=0.75;
  const pan=2;
  let total=(a*jamon)+(b*refresco)+(c*cerveza)+(d*pan);

  return `El precio total es de ${total}`;
  
}

module.exports = { menuRestaurante };
