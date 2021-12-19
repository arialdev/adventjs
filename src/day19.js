/**
 * Problem description:
 Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es
 un regalo 🎁 para siempre.

 En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo
 disponible para completar dos cursos.

 Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el
 segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

 Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos
 que vamos a poder completar con el tiempo disponible proporcionado. Si no nos da tiempo, devolvemos null

 Vamos a ver unos ejemplos:

 learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0
 y 2.

 learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

 learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre
 devolvemos el primero que encontremos

 learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

 learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos
 learn(5, [5, 5, 5]) // null -> no nos da tiempo a hacer dos cursos
 */

/**
 * Title: Iterating every element and its successors.
 * Complexity: O(N log N);  Ω(1)
 * Comment:
 * - In this solution I use reduction to sum the bestResult items. This list will contain, at most, 2 items, so a
 *      classical sum will work. I do it this way because I didn't want to deal with adding undefined values.
 * 1. We iterate every element and its successors. By doing this we get a time complexity of O(N log N) instead of
 *      O(N^2), because when we find the exact solution (two items who sums the exact required time) we just stop
 *      iterating and finish the execution.
 * 2. I declare a variable named 'bestResult', whose initial result is an empty array. For every iteration I check if
 *      the new pair summed is lower than the time parameter and that its a better (not equal) solution than the
 *      previous one. If so, I update bestResult, otherwise I keep its value.
 * 3. As the initial result value is an empty list, and as if none of the courses suited the time bound I shall return
 *      null, I use a ternary operator to do it.
 *
 */
export default function learn(time, courses) {
    let bestResult = [];
    for (let i = 0; i < courses.length - 1; i++)
        for (let j = i + 1; j < courses.length; j++) {
            bestResult = (courses[i] + courses[j] > time || bestResult.reduce((acc, r) => acc + courses[r], 0) > courses[i] + courses[j]) ? bestResult : [i, j];
            if (bestResult.reduce((acc, r) => acc + courses[r], 0) === time) return bestResult;
        }
    return bestResult.length ? bestResult : null;
}