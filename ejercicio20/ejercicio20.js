/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos
 *  para acertar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

function adivinarContrasena(coleccion,contraseña) {
  let contador=0;
  for(i=0;i<=coleccion.length;i++){
      contador++
      if(contador>3){
        console.log(`"Has agotado tus intentos"`)
        console.log(contador)
        break
    }else{
      if(coleccion[i]==contraseña){
        console.log(`Contraseña correcta, bienvenido`);
        console.log(contador)
        
      }else{
          console.log(`Contraseña incorrecta, intentelo de nuevo`);
      }
    }
  }
}

module.exports = { adivinarContrasena };
