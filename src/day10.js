/**
 Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el
 mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

 Las monedas para cambio que puedes usar son estas:

 coins[0] = 1 céntimo
 coins[1] = 2 céntimos
 coins[2] = 5 céntimos
 coins[3] = 10 céntimos
 coins[4] = 20 céntimos
 coins[5] = 50 céntimos
 Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un
 array con la combinación de monedas mínimas que debemos usar para conseguirlo.

 getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
 getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
 getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
 getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
 getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
 La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que
 tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible.
 ¡Suerte 👩‍💻👨‍💻!.
 */

/**
 * Title: Functional using bit-to-bit operators
 * Complexity: Θ(N)
 * Comment:
 * This was my first attempt. Later, with the help of @suanserio (Twitter) I got a more evil one 😈.
 * 1. The idea of the algorithm is to iterate the coinsValue array while selecting how many coins (units) of every value
 *      would be necessary in order to the the lowest number of total coins.
 * 2. To get the lower quantity of coins what we need to do is to get the highest quantity of 'big' coins possible.
 *      E.g. If we need 51 cents in coins, its better to have a 1x50 + 1x1 than 51x1 or 25x2 + 1x1, etc.
 * 3. Because of this, we need to iterate the array from the highest values to the lowest values: descending. However,
 * the requested array must be ascending sorted. We have three options:
 *      3.1. Iterate the array in a descending way and finally reverse it. That would be a simple but inefficient
 *      solution, as we would be traversing the array again, getting an Θ(N^2) solution.
 *      3.2. Using mathematical operations to get the result array's index. This would be nice, although it would add
 *      some complexity to the code (nobody likes formulas, even if they are this simple).
 *      3.3. Using the ReduceRight function instead of Reduce in order to iterate the array from right to left (no need
 *      for resorting). This is the chosen one because of its simplicity.
 * 4. For the reduction inner function we need the accumulator, the iterated value of the coinsValues array and it's
 *      index. The accumulator is just a counter of the coins values, starting all the values to 0. The index is necessary
 *      for updating the accumulator at the same position as the iterated value.
 * 5. The inner function:
 *      5.1. First we divide the current change to the current coin value. The result would be the quantity of coins of
 *      this value necessary, and we store it in the solutions array (accumulator). For doing so we need and integer
 *      division. We could just trunk the solution via Math.trunk, but I preferred to do a bit-to-bit division because
 *      it's funnier 😅.
 *      5.2. Then we get the mod. This would be the resulting change after retrieving the previously calculated coins.
 */
// export default function getCoins(change) {
//     const coinsValues = [1, 2, 5, 10, 20, 50];
//     return coinsValues.reduceRight((coins, coinValue, index) => {
//         coins[index] = ~~(change / coinValue);
//         change = change % coinValue;
//         return coins;
//     }, Array(coinsValues.length).fill(0));
// }

/**
 * Title: One-linear madness.
 * Complexity: Θ(N log N)
 * Comment:
 * - Twitter's user @suanserio looked my previous solutions and he helped me developing this pure evil one-linear program.
 *      The procedure is very similar, but very compacted.
 * - It's important to say that this is a more complicated solution, less readable and more time complex, so I would not
 * recommend to write code like this. Do it only for fun on this kind of challenges.
 *
 * 1. Now we start from an empty array, and we will be concatenating the calculated values on it's head, so we won't
 * need the index anymore.
 * 2. So on every iteration we would be returning a new array. On it's head there will be the current calculated number
 *      of the current coin, and after it there would be the items of the accumulator. That's why we need the spread
 *      operator '...'.
 * 3. You may have notice about a third element on the returning array. This would mean nothing to the actual array,
 * its only purpose is to decrease the change value on every iteration:
 *      3.1. change %= coinValue would modify change's value, and returns it. We only want to decrease, and not to
 *      receive its value, because that would add it into the array and we do not want that. For ignorig it we just do
 *      it inside a void function.
 *      3.2. This will return 'undefined', but we do not want this either, so we use the logical operator 'or' || and
 *      add a second value: and empty array. As the left part will always be undefined, the result will always be the
 *      empty array.
 *      3.3. But we are not finished yet. This will return and empty array as the last item of the accumulator
 *      (e.g. [1,[])). However, using the spread operator we can obtains all its values, in the same way we did to get
 *      all the accumulator items for the resulting array. As it is an empty array it would return nothing: now we do
 *      are done :).
 *
 */
export default function getCoins(change) {
    return [1, 2, 5, 10, 20, 50].reduceRight((acc, coinValue) => [~~(change / coinValue), ...acc, ...void (change %= coinValue) || []], []);
}