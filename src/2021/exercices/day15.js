/**
 * Problem description:
 ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

 Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para
 esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

 Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver
 como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa
 que sólo pasaremos arrays de, como mínimo, tres posiciones.

 Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

 checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
 checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
 checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
 checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

 checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
 checkSledJump([1, 2, 3]) // false: sólo sube
 checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
 Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto
 más alto y entonces ver que la bajada es estricta hacia abajo...
 */

/**
 * Title: Iterating over the array, checking out if the trend is OK.
 * Complexity: O(N)
 * Comment:
 * 1. Initial state: we set the up variable to true, indicating that we are going up as we should, and the lastValue to
 *      the first item of the array.
 * 2. We start iterating the array from 1 to N-1, as the initial state is initialized with the first item of the list.
 * 3. During the iteration, if the received height is the same than the previous one it means that the ascending or the
 *      descending is not strict. If we are going down and we receive a higher value than the last recorded one it means
 *      we are going up again and this is not a parable. We return false in both situations.
 * 4. Otherwise, the value is OK. If the trend is going up but we now receive a lower value than the lastValue, it means
 *      we are starting to descend. We update the lastValue and continue the loop.
 * 5. The loop only checks issues with the descending, but after exiting it we did not check if we ever descend. Because
 *      of this we return the negated result of up, so if we never descended, would return false, and true otherwise.
 */
export default function checkSledJump(heights) {
    let up = true;
    let lastValue = heights[0]
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] === lastValue || !up && heights[i] > lastValue) return false;
        if (up && heights[i] < lastValue) up = false;
        lastValue = heights[i];
    }
    return !up;
}