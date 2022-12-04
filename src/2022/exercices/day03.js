/**
 * Problem description:
    You receive a Christmas gifts pack that Santa Claus wants to deliver to the children.
    Each gift inside the pack is represented by a string and it has a weight equal to the
    number of letters in its name. Santa Claus's sleigh can only carry a weight limit.

    Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each
    reindeer has a maximum weight limit that it can carry. The maximum weight limit of
    each reindeer is equal to twice the number of letters in its name.

    Your task is to implement a function distributeGifts(packOfGifts, reindeers) that
    receives a gifts pack and a list of reindeer and returns the maximum number of gifts
    packs that Santa Claus can deliver. You can't split gifts packs.

    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]

    // pack weights 4 + 4 + 4 = 12
    // reindeers can carry (2 * 6) + (2 * 6) = 24
    distributeGifts(packOfGifts, reindeers) // 2
    Things to keep in mind:

    The gifts pack can't be splitted.
    Gifts and reindeers' names length will always be greater than 0.
*/

/**
 * 
 * Explicación:
 *  - Necesitamos calcular cuanto pesa cada pack de regalos, para ello contamos
 *    las letras de cada palabra y sumamos la lista resultante.
 *  - Lo mismo para la fuerza de trineo que tenemos, pero multiplicamos la fuerza
 *    de cada reno por dos, tal y como indican las instrucciones.
 *  - Nótese que es lo mismo multiplicar todos los elementos por dos, y luego
 *    sumarlos, que sumarlos y la suma final multiplicarla por dos (propiedad distributiva).
 *  - Nótese también que ambas funciones que usamos para tanto calcular el peso del pack de
 *    regalos como para obtener la fuerza del trineo son práctiacamente idénticas y que se
 *    podría extraer esa lógica para no repetir código. En el contexto de este ejercicio no
 *    lo vi necesario.
 *  - Finalmente dividimos la fuerza total que tenemos entre lo que pesa cada pack de regalos
 *    y nos quedamos con el cociente (ignoramos el resto, pues los packs de regalo no se
 *    pueden dividir). Una forma muy sencilla de hacer eso es redondear por abajo con 
 *    Math.prototype.floor.

 */
export default function distributeGifts(packOfGifts, reindeers) {
  const giftPackWeight = packOfGifts
    .map((gift) => gift.length)
    .reduce((acc, giftWight) => acc + giftWight);
  const availableStrength = reindeers
    .map((reinder) => reinder.length)
    .reduce((acc, reinderPower) => acc + reinderPower) * 2;

  return Math.floor(availableStrength / giftPackWeight);
}