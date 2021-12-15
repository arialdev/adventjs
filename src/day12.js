/**
 En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para
 dejar los regalos.

 La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

 El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de
 posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

 Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

 Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en
 la ruta.

 const obstacles = [5, 3, 6, 7, 9]
 getMinJump(obstacles) // -> 4

 S es salto, X es obstáculo
 Así quedaría la representación:
 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 .  .  .  X  .  X  X  X  .  X  .
 S-----------S-----------S-------


 const obstacles = [2, 4, 6, 8, 10]
 getMinJump(obstacles) // -> 7

 // Así quedaría la representación:
 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 .  .  X  .  X  .  X  .  X  .  X
 S--------------------S---------

 // Longitudes de salto:
 // 1 caería en el 2
 // 2 caería en el 2
 // 3 caería en el 6
 // 4 caería en el 4
 // 5 caería en el 10
 // 6 caería en el 6
 // 7 es el ideal!!! ✅

 getMinJump([1, 2, 3, 5]) // -> 4
 getMinJump([3, 7, 5]) // -> 2
 getMinJump([9, 5, 1]) // -> 2

 La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto
 mínimo que nos serviría para sortear todos los obstáculos.
 */

/**
 * Title: Functional + multiple condition
 * Complexity: O(N*T) -> T is the highest value of the list
 * Comment:
 * 1. First we get the highest value of the list. It's an O(N) operation but we will only do this once.
 * 2. The idea is to try every possible jump: from 1 to T, being T the highest value of the list. T is important because
 *      we need to set a stopping point on the loop, and if we could not find any possible jump on the last iteration, a
 *      jump which could pass all the obstacles at once would be the answer.
 * 3. To know if the current jump value would work we just have to ensure that there is no obstacle multiple of the
 *      current value. Another option would be to create an inner loop for every jump to iterate the array and ensure
 *      that with that value we won't hit any array's value. However, the proposed option is smarter, more simple and
 *      shorter.
 */
export default function getMinJump(obstacles) {
    const maxValue = Math.max(...obstacles);
    for (let j = 1; j < maxValue; j++) if (obstacles.every(o => o % j !== 0)) return j;
}