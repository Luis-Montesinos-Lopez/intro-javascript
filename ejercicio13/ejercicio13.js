/** Ejercicio 13
 * Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
        Superficie= base*altura
        Perímetro = 2*(base + altura)
    La funcion debera retornar un string que diga La superficie es de 'x' o El perimetro es de 'x'
 */

function calcularSuperficie(a,b) {
  let superficie=a*b;
  return `La superficie es de ${superficie}`;
}

function calcularPerimetro(a,b) {
 let perimetro=2*(a+b);
 return `El perimetro es de ${perimetro}`;
}

module.exports = { calcularPerimetro, calcularSuperficie };
