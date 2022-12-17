/**
 * Explicación:
 *  - No nos interesa el consumo por unidad de distancia, nos interesa el consumo por lo que ha recorrido,
 *    por tanto a cada objeto de la lista le añadimos este calculo bajo la clave 'watts'.
 *  - Filtramos aquellos elementos que consuman más de lo que nos permite la batería.
 *  - Nos quedamos con la última opción disponible. Como el array estaba ordenado ascendentemente por consumo, 
 *    esa será la mejor opción.
 *  - En el caso de que no haya ningún reno que nos permita consumir menos de lo que nos permita la batería, o que
 *    directamente no haya renos, devolvemos NULL.
*/

export default function selectSleigh(distance, sleighs) {
  const BATTERY_LIMIT = 20;
  const result = sleighs
    .map(sleigh => {
      sleigh.watts = sleigh.consumption * distance;
      return sleigh;
    })
    .filter(sleigh => sleigh.watts <= BATTERY_LIMIT)
    .at(-1)
  return result ? result.name : null;
}

/**
 * SOLUCIÓN ALTERNATIVA!!
 * Esta solución es idéntica a la anterior, pero utilizando una sintaxis de JS más moderna. Lamentablemente, 
 * adventJS sólo permite utilizar sintaxis hasta ES2017.
 * 
 * Explicación:
 *  - Gracias a la desestructuración, en el map podemos crear por cada objeto un nuevo objeto incluyendo las entradas
 *    ya existentes en el objeto original + la nueva entrada de weight. Todo en una sóla línea.
 *  - Si no fuese por mí manía de no usar magic numbers, todo podría hacerse en una sóla línea, como puedes ver. Esto
 *    es debido a que con los Optional Fields + Nullish coalescing podemos trabajar los valores nullish y undefined.
 *    En este caso, .at(-1) nos devuelve la última posición del array, pero esto podría devolver UNDEFINED en caso de
 *    en el array no haya elementos. Si accediésemos en ese caso al campo NAME, podría saltar una excepción, pues .name
 *    no existe en UNDEFINED. Para ello accedemos utilizando el operador '?.', que hace que en ese caso concreto, lo que
 *    haría sería propagar el UNDEFINED por la llamada. Es decir:
 *      * undefined.name => ERROR
 *      * undefined?.name => undefined
 *    Por último, con el operador NULLISH COALESCING, '??', estamos comparando lógicamente si el valor de la izquierda es
 *    NULLISH, es decir, NULL o UNDEFINED, y en caso afirmativo, devolver lo que tengamos a la derecha del operador, en este caso, NULL.
 * 
*/

export default function selectSleigh(distance, sleighs) {
  const BATTERY_LIMIT = 20;
  return sleighs
    .map(sleigh => ({ ...sleigh, watts: sleigh.consumption * distance }))
    .filter(sleigh => sleigh.watts <= BATTERY_LIMIT)
    .at(-1)
    ?.name ?? null
}