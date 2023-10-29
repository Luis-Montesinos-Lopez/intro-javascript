/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno(coleccion){
  let arrayAux=[];
    let media=0;
    for(i=0;i<coleccion.length;i++){
      if(coleccion[i]>=0){
        arrayAux.push(coleccion[i]);
      }else{
        break
      }
    }
    for(i=0;i<arrayAux.length;i++){
        media+=arrayAux[i]/arrayAux.length;
    }
    return media;

}

module.exports = { mediaArrayHastaMenosUno };
