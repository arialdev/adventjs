/**
 * Problem description:
    Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un
    array de números que representan la altura en la que se encuentra el trineo en cada momento.

    Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y
    descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

    const heights = [1, 3, 8, 5, 2]
    checkJump(heights) // true

    /*
    Es `true`.
    El salto va de abajo a arriba y luego de arriba a abajo:

        8 (punto más alto)
      ↗ ↘
      3   5
    ↗     ↘
    1       2


    const heights = [1, 7, 3, 5]
    checkJump(heights) // false

    /*
    Es `false`.
    Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

      7   5 
    ↗ ↘ ↗
    1   3
    Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.

    A tener en cuenta
    Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura
    entre dos posiciones, la parabola continua.
    No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).
*/

/**
 * Explicación:
 *  - La idea es ir recorriendo la lista estando pendiente de dos flags: hasIncreased y hasDecreased.
 *  - Al terminar de recorrer la lista, se habrá formado una parábola si ambos flags están a TRUE.
 *  - Sin embargo, sólo se puede subir y bajar una vez, por lo que en cada iteración debemos estar pendientes del 
 *    sentido del movimiento.
 *  - Para ello calculamos la posición anterior. Para no tener problemas, empezamos a iterar desde al segunda posición de 
 *    la lista, y así nunca tendremos un valor undefined.
 *  - Si el sentido del movimiento es ascendente, pero ya habíamos descendido antes, es decir, estaríamos ante una segunda subida,
 *    salimos de la función devolviendo FALSE.
*/


export default function checkJump(heights) {
  let i = 1;
  let hasIncreased = false;
  let hasDecreased = false;
  while (i < heights.length) {
    const previousPosition = heights[i - 1];
    if (previousPosition < heights[i]) {
      if (hasDecreased) return false;
      hasIncreased = true;
    } else if (previousPosition > heights[i]) {
      hasDecreased = true;
    }
    i++;
  }
  return hasIncreased && hasDecreased;
}