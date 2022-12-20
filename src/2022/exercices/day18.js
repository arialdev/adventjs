/**
 * Explicación:
 * Pensando en números quizás esto se vea confuso, así que pensemos que son strings.
 * Aquí se nos estaría pidiendo que, dado un caracter y una lista de strings, devolvamos
 * aquellos elementos de la lista de strings que contienen dicho caracter al menos una vez.
 * - Cierto, no nos dan una lista de caracteres, sino que nos dicen el límite superior de
 *   un rango de números. Este rango, por convención, empieza por 1, así que si al segundo
 *   parámetro lo llamásemos N, estaríamos trabajando con un rango de [1,N]. Este rango no
 *   lo tenemos, lo tenemos que crear, y para eso es la primera operación: vamos a crear un
 *   array vacío de tamaño N, obtener una colección iterable de sus índices y por último
 *   transformar esa colección iterable en una lista gracias al operador 'spread'.
 * - Sin embargo, recordemos que los arrays en JavaScript se enumeran así: [0,N-1]. Por lo
 *   tanto, para tener nuestro querido array de números de [1,N] necesitamos incrementar
 *   todos los items una posición.
 * - Ya tenemos nuestra entrada deseada, ahora sólo falta fitrar todos aquellos números que,
 *   convertidos a string (por comodidad), tienen un caracter que sea el dígito pedido en
 *   cuestión (debido al tipado dinámico de JavaScript, al estar comparando string con number,
 *   estará comparando realmente string con string. Ver coersion).
 *
*/

export default function dryNumber(dry, numbers) {
  return [...Array(numbers).keys()]
    .map(bar => bar + 1)
    .filter(bar => bar.toString().includes(dry));
}