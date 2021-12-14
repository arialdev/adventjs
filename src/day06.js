/**
 * Title: Brute force that stops when finds solution.
 * Complexity: O(N^2)
 * Comment: This is not an elegant solution, but it works and in this case I think, as I'm not an expert on dynamic
 * programming, it would work better than the fixed second solution (not implemented because I think it was not worth
 * it).
 */
export default function sumPairs(numbers, result) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === result) return [numbers[i], numbers[j]];
        }
    }
    return null;
}

/**
 * Title: Optimal using dynamic programming.
 * Complexity: O(N)
 * Comment: Correct algorithm but does not work for tests because of solution order.
*  There is people who tries to reorder the 'posible solutions' array, but trying to reordering has the same or even
 * more time complexity than the first solution
 */
// export default function sumPairs(numbers, result) {
//     let map = new Map();
//     for (const number of numbers) {
//         if (map.has(number)) return [map.get(number), number];
//         map.set(result - number, number);
//     }
//     return null;
// }

/*
Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.

Veamos unos ejemplos:

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
El resultado tiene que ser un array con dos números.

Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔?
 */