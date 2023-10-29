// Ejercicio 14
// Construir un algoritmo que resuelva el problema
// que tienen unos surtidores de gasolina, que registran
// lo que surten en galones, pero el precio de la gasolina
// se fija en litros. El algoritmo debe calcular
// e imprimir el precio que hay que cobrarle al cliente.

// Precio gasolina = 1.333euros / litro
// 1 galon = 3,78541 litros



function precioEnLitros(litros) {
  let precio=(litros*3.78541)*1.333;
  return precio;
}

module.exports = { precioEnLitros };
