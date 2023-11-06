/**
 * Ejercicio 49
 * Se tienen los costes de produccion de tres departamentos (dulces,bebidas y conservas)
 * correspondientes a los 12 meses del ano anterior. Construir algoritmos que proporcionen:
 *
 * a) En que mes se registro el mayor coste de produccion de dulces?
 * b) Promedio anual de los costes de produccion de bebidas
 * c) En que mes se registro el mayor coste de produccion en bebidas, y en que mes el menor coste?
 * d) Cual fue el que tuvo menor coste de produccion en diciembre?
 *
 */

const cakes = [55, 40, 78, 45, 67, 21, 30, 90, 85, 73, 58, 25];
const drinks = [45, 67, 21, 30, 55, 40, 78, 45, 80, 66, 39, 74];
const preservedFood = [78, 45, 80, 66, 39, 74, 67, 21, 30, 90, 85, 73];

function getMaxCost(array) {
  
  let maxcost=array[0];
  let mes=0;
  for (let i = 1; i < array.length; i++) {
    if(array[i]>maxcost){
      maxcost=array[i];
      mes=[i+1];
    }
          
    
  }return `max: ${maxcost} \n month: ${mes}`;
}

function getMinCost(array) {
  let mincost=array[0];
  let mes=0;
  for (let i = 1; i < array.length; i++) {
    if(array[i]<mincost){
      mincost=array[i];
      mes=[i+1];
    }
          
    
  }return `min: ${mincost} \n month: ${mes}`;
}

function getAverageCost(array) {
  let averageCost=0;
  for(let i=0;i<array.length;i++){
    averageCost+=array[i];
  }
  return averageCost/array.length;
}

function getLastCost(array) {
    return array[array.length-1];
  }


function getPriceDecember() {
  //Escribe tu codigo aqui
}

function getMinPriceDecember(a,b,c) {
  if(a[a.length-1]<b[b.length-1]&&a[a.length-1]<c[c.length-1]){
    return a[a.length-1];
  }else if(b[b.length-1]<a[a.length-1]&&b[b.length-1]<c[c.length-1]){
    return b[b.length-1];
  }else if(c[c.length-1]<a[a.length-1]&&c[c.length-1]<b[b.length-1]){
    return c[c.length-1];
  }
}
console.log(getMinPriceDecember(cakes,drinks,preservedFood));

module.exports = {
  getAverageCost,
  getLastCost,
  getMaxCost,
  getMinCost,
  getMinPriceDecember,
};


let ultimoCoste=(array)=>{
  return array[array.length-1];
}
console.log(ultimoCoste([2, 3, 4, 5, 6, 7, 8]))