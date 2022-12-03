/**
 * Problem description:
    Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear
    un algoritmo que le ayude en la tarea.

    A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva
    cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

    El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente
    al string por todos los lados. Por ejemplo:

    const gifts = ['cat', 'game', 'socks']
    const wrapped = wrapping(gifts)

    console.log(wrapped)
    [
    "*****\\n*cat*\\n*****",
    "******\\n*game*\\n******",
    "*******\\n*socks*\\n*******"
    ] 

    Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas
    también están cubiertas por el papel de regalo.

    Nota: El carácter \n representa un salto de línea.

    ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo
    los necesarios para cubrir el string.

    Ah, y no modifiques (mutes) el array original.
*/

/**
 * 
 * Explicación:
 *  - Cada regalo es un string, y tenemos que 'envolver' ese string en asteriscos.
 *  - Para ello necesitamos saber cuánto ocupa ese string en horizontal.
 *  - La palabra 'sopa' queraría así:
 *      ******
 *      *sopa*
 *      ******
 *  - Es decir, si la longitud de la palabra es n, necesitamos una capa superior de n+2 asteriscos, una capa inferior de
 *    n+2 asteriscos y luego poner un par de asteriscos a cada lado de la palabra.
 *  - Podemos lograr esto dinámicamente y muy fácilmente mediante String.prototype.repeat junto con los Template Literals
 *    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). 
 */
export default function wrapping(gifts) {
  return gifts.map(gift => `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(gift.length + 2)}`);
}
