/**
 * Problem description:
 ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

 Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y
 nos pasa un array con los ids de cada reno.

 👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.
 👎 Lo malo: la lista está desordenada y podría faltar el último...

 Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

 missingReindeer([0, 2, 3]) // -> 1
 missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
 missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
 missingReindeer([3, 0, 1]) // -> 2
 missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
 missingReindeer([0]) // -> 1 (¡es el último el que falta!)
 Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?
 */

/**
 * Title: Iterating over an array looking for missing Id
 * Complexity: Θ(N)
 * Comment:
 * -The problem description suggests this could be resolved with a better performance than O(N). However, I could not
 *      guess how. Feel free to comment a better solution. There is people who got it solved via firstly sorting the
 *      list and then just trying to find out which element does no match with its index. However, a sorting algorithm
 *      in JS has an O(N log N) time complexity, so it would actually be a worse solution than the one that I propose.
 * 1. The passed argument is a list from 0 to N-1 but with one missing item, so we suppose that the correct content of
 *      the list should be from 0 to N-1. Because of this we create a set full of ids from 0 to N-1. This set will be our
 *      initial accumulator.
 * 2. We iterate the ids list via reduction, and for every item on the ids list we remove it from the set.
 * 3. After removing all the items, only one last id will remain on the set: the missing id. If there is no id left on
 *      the set, this means that the missing Id would be the Nth id, so we return ids.length.
 */
export default function missingReindeer(ids) {
    return [...ids.reduce((acc, id) => {
        acc.delete(id);
        return acc;
    }, new Set([...Array(ids.length).keys()])).values()][0] ?? ids.length;
}