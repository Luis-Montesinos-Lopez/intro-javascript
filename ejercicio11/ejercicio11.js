/**
 *  Ejercicio 11
 *  En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente.
 */

function descuentoCompra(precio) {
  let precioDesc;
  if(precio<500){
    return precio;
  }else if(precio>=500&&precio<=1000){
    precioDesc=precio-(precio*0.05);
    return precioDesc;
  }else if(precio>=1000&&precio<=7000){
    precioDesc=precio-(precio*0.10)
    return precioDesc;
  }else if(precio>=7000&&precio<=15000){
    precioDesc=precio-(precio*0.20);
    return precioDesc
  }else{
    precioDesc=precio-(precio*0.25);
    return precioDesc;

  }
}

module.exports = { descuentoCompra };
