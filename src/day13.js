/**
 * Problem description:
 ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

 Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han
 sido envueltos con asteriscos tanto por arriba como por los lados.

 Sólo tienes que tener en cuenta unas cosillas ✌️:

 - Si el array está vacío, devuelve un array vacío
 - Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
 - Por suerte, cada posición del array siempre tiene la misma longitud...
 */

/**
 * Title: One-liner + functional + spread operator + string concatenation + ternary operator + template literals
 * Comment:
 * -The idea is simple:
 *      a. All the items in the array have the same length.
 *      b. We need to create a string, where every line would be one array's item headed and tailed by one asterisk.
 *      c. We must wrap the string at the beginning and ending by asterisks with the same width than the array's items +
 *              the two extra asterisks for the sides.
 *      d. Emoji's length is two characters. We must take this in consideration.
 * 1. The ternary operator is for the case the gifts list is empty. Rules say that in this case we mast return and empty
 *      list, so we return the very same list.
 * 2. Otherwise we create a new array with two elements*:
 *      2.1. The first element of the array is the result of a reduction: for every item in the array we wrap it with
 *          two asterisks and add the resulting string into the accumulator. The initial accumulator is the first line of
 *          the final string: the heading asterisks.
 *      2.2. As the accumulator is an array of strings, we need to use the spread operator to get its elements into the
 *          final array.
 *      2.3. Now there is only one last thing missing: the last line of asterisks. Because of this we add it as the
 *          second element of the final array, doing the same we did with the first layer (reduction function's initial
 *          accumulator).
 */
export default function wrapGifts(gifts) {
    return gifts.length === 0 ? gifts : [...gifts.reduce((acc, gift) => [...acc, ...[`*${gift}*`]], ['*'.repeat(gifts[0].length + 2),]), '*'.repeat(gifts[0].length + 2)];
}