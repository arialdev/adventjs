/**
 * Problem description:
Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una
certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo
llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa
que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5

Ten en cuenta:
  -El formato de la hora es hh:mm:ss.
  -El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la
  tarea que falta por completar.
  -La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar
  como 1/2).
  -Si ya se ha completado la tarea, la fracción sería 1/1.
  -Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.
*/

/**
 * Explicación:
 *  - La entrada nos viene en formato string, pero para poder trabajar con la diferencia de tiempo nos conviene pasarlo a formato
 *    numérico. Escogemos los segundos como unidad de tiempo para ser precisos.
 *  - Para hacer la conversión de tiempo utilizamos una función que parsea el string, primero extrayendo las tres unidades
 *    disponibles: horas, minutos y segundos, en ese orden. Después parseamos a número esos valores. Debido al Type Coercion este
 *    último paso no es necesario, pues un '3' se trataría como un 3, pero haciendo este paso explícitamente nos curamos en salud.
 *    Por último trabajamos cada unidad multiplicandolo por lo que toque y sumando los resultados para obtener los segundos totales.
 *  - Ahora tenemos unos maravillosos numerador y denominador, tiempo transcurrido y tiempo estimado respectivamente, en segundos.
 *    Necesitamos simplificar esa fracción, y para ello utilizamos el Máximo Común Divisor.
*/

export default function getCompleted(part, total) {
  const getGCD = (a, b) => b ? getGCD(b, a % b) : a;
  const getSecondsFromString = (str => str
    .split(':')
    .map((t) => parseInt(t))
    .reduce((acc, t, i) => acc + t * Math.pow(60, 2 - i), 0));

  const elapsedSeconds = getSecondsFromString(part);
  const estimatedSeconds = getSecondsFromString(total);

  const gcd = getGCD(elapsedSeconds, estimatedSeconds);
  const numerator = elapsedSeconds / gcd;
  const denominator = estimatedSeconds / gcd;

  return numerator + '/' + denominator;
}