/**
 * Problem description:
 Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana

 Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al
 máximo la creación de regalos. 🎁

 La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos
 cambiar cada carácter por otro.

 Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter
 a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

 Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar
 otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

 const from = 'BAL'
 const to   = 'LIB'
 const canReconfigure(from, to) // true

 la transformación sería así:
 B -> L
 A -> I
 L -> B


 const from = 'CON'
 const to   = 'JUU'
 const canReconfigure(from, to) // false

 no se puede hacer la transformación:
 C -> J
 O -> U
 N -> FALLO


 const from = 'MMM'
 const to   = 'MID'
 cons canReconfigure(from, to) // false
 no se puede hacer la transformación:
 M -> M (BIEN, asigna el mismo carácter a si mismo)
 M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
 M -> D (FALLO, asigna el mismo carácter a dos letras distintas)


 const from = 'AA'
 const to   = 'MID'
 cons canReconfigure(from, to) // false -> no tiene la misma longitud
 */

/**
 * Title: Use a map as a translation table and check if there are the same existing records for different values.
 * Complexity: O(N); Ω(1)
 * Comment:
 * 1. First we check if we can save all the computational cost of the algorithm by checking the parameters length. If
 *      they have different length we return false, as the instructions require. This is important for the efficiency of
 *      our algorithm, as we can ensure more O(1) scenarios.
 * 2. We declare a map to store our values. The keys would be the returning character and the value the original
 *      character.
 * 3. We start the iteration. As we have already check that both parameters have the same length, they will share the
 *      same index in the itaration.We must first check if we already have any of the following conditions:
 *      3.1. We already have the returning character recorded and its recorded translated value is different than the
 *          one we are checking up.
 *      3.2. We already have the original character recorded and its recorded returning value is different than the one
 *              we are checking right now.
 *      If any of these conditions is TRUE, we return false. Otherwise, we store the new recording into the map and
 *      continue iterating.
 * 4. If we ever escape from the loop this will mean that we didn't found any error in our translation, so we return TRUE.
 */
export default function canReconfigure(from, to) {
    if (from.length !== to.length) return false
    let map = new Map();
    for (let i in from) {
        if (map.has(to[i]) && map.get(to[i]) !== from[i] || map.has(from[i]) && map.get(from[i]) !== to[i])
            return false;
        map.set(to[i], from[i]);
        map.set(from[i], to[i]);
    }
    return true;
}