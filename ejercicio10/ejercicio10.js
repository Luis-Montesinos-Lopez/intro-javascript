/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario(sueldo,categoria) {
  let aumento;
    if(categoria==1){
      aumento=sueldo+sueldo*0.15;
      return aumento;
    } else if(categoria==2){
      aumento=sueldo+sueldo*0.10;
      return aumento;
    }else if(categoria==3){
      aumento=sueldo+sueldo*0.06;
      return aumento;
    }else if(categoria==4){
      aumento=sueldo+sueldo*0.03;
      return aumento;
    }else{
      return sueldo;
    }
}

module.exports = { nuevoSalario };
