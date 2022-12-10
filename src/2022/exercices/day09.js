/**
 * Problem description:
    Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

    Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

    Cada 7 segundos, los leds cambian de estado de esta forma:

    Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
    Si el led está encendido, se mantiene siempre encendido.
    Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los
    segundos se expresan en un número entero. Por ejemplo:

    const leds = [0, 1, 1, 0, 1]
    countTime(leds) // 7
    // 7 segundos ya que en el primer cambio
    // todas las luces se encendieron
    // 0s: [0, 1, 1, 0, 1]
    // 7s: [1, 1, 1, 1, 1]

    countTime([0, 0, 0, 1]) // 21
    // 21 segundos ya que necesita tres cambios:
    // 0s: [0, 0, 0, 1]
    // 7s: [1, 0, 0, 1]
    // 14s: [1, 1, 0, 1]
    // 21s: [1, 1, 1, 1]

    countTime([0, 0, 1, 0, 0]) // 28
    // 28 segundos ya que necesita cuatro cambios:
    // 0s: [0, 0, 1, 0, 0]
    // 7s: [0, 0, 1, 1, 0]
    // 14s: [0, 0, 1, 1, 1]
    // 21s: [1, 0, 1, 1, 1]
    // 28s: [1, 1, 1, 1, 1]
    A tener en cuenta
    El array siempre tendrá al menos un led encendido.
    El array puede tener cualquier longitud.
    Si todos los leds están encendidos, el tiempo es 0.
*/

/**
 * 
 * Explicación:
 *  - El ejercicio nos promete que la entrada siempre tendrá un led encendido, por lo que nuestro programa nunca se topará
 *    con una entrada que el algoritmo no pueda resolver. Por esto mismo, nos tomamos la libertad de hacer un while(true),
 *    ya que nuestro programa, por contrato, jamás entrará en estado de bucle infinito.
 *  - El algoritmo es el siguiente. Iteramos mediante un while true hasta que todos nuestros leds estén encendidos. Al contar
 *    siempre con al menos un led encendido de entrada, en cada iteración del bucle while habrá un cambio de estado obligatoriamente,
 *    es decir, habrá siempre al menos un led apagado que encendamos.
 *  - La lista de leds es circular. Es decir, el elemento de la izquierda del primer elemento es el último elemento.
 *  - A partir de los tests entendemos que no hay reacción en cadena en una misma 'ronda', es decir, si en cierta iteración tengo [0,0,1],
 *    podemos encender el primer led, puesto que el de su 'izquierda', es decir, el último led en este caso, está encendido. Esto quedaría así
 *    [1,0,1]. Si ahora, en la misma 'ronda' comprobamamos el segundo led, veremos que 'podríamos' encenderlo, puesto que el led de su izquierda
 *    está encendido (lo acabamos de encender en la misma ronda), por lo que la lista de leds quedaría así [1,1,1]. ERROR, no se permite tal cosa.
 *    Para evitar bugs de este estilo, en cada ronda utilizamos una lista auxiliar sobre la que vamos editando y al final de cada ronda se aplica esta
 *    lista auxiliar como la lista a utilizar en la siguiente ronda.
*/

export default function countTime(leds) {
  let counter = 0;
  while (true) {
    let modified = false;
    const modifiedLeds = [...leds];
    for (let i = leds.length - 1; i >= 0; i--) {
      const leftPosition = leds[(i - 1 + leds.length) % leds.length];
      if (!leds[i] && leftPosition) {
        modifiedLeds[i] = 1;
        modified = true;
      }
    }
    if (!modified) return counter;
    leds = modifiedLeds;
    counter += 7;
  }
}