/**
 * Problem description:
 Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.

 Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan guardar el
 mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.

 Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo número de
 elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el número de veces que se encontró
 repetido.

 Lo mejor es que veamos un ejemplo:

 const files = ['photo', 'postcard', 'photo', 'photo', 'video']
 fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

 const files2 = ['file', 'file', 'file', 'game', 'game']
 fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

 // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
 const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
 fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
 Por cierto, nos han dicho que son Agile y usan Scrum. Por eso quieren saber cuánto tiempo vas a tardar para saber
 cuándo van a poder usarlo. Que hay prisa. 😝 Así que entra a Discord y cuéntanos.
 */

/**
 * Title: Using a map (or object) to store the values and their occurrences.
 * Complexity: Θ(N)
 * Comment:
 * - As the returning value will be the vary same list, but with a bit of modification on some of their values, I decided
 *      to use the map function.
 * - The idea is to have a map to store the items as keys and their occurrences as values. The map (or object in this
 *      case), starts empty, and during the iteration I'll be filling it. If I get to al element that doesn't appears on the
 *      map, I added with an starting value of 1 (first occurrence). Otherwise I increments its existing value.
 * - The mapping works like this:
 *      1. I always return first the actual item. Then I check if the iten exists on the map. If it does exist I just
 *              have to return the value and increment it. Otherwise, I use the same trick I used on exercise 10.
 *      2. The trick consists on that I don't wanna to return nothing, as the first occurrences of items shall not have
 *              the counter on their string. But I need to modify its value. By doing this[file] = 1 the returning value
 *              would be '1'. I don't want this. Because of this I put this sentence in an inner void function so the
 *              returning value would be 'undefined'. Why would I do that? I don't want 'undefined' either. Because by
 *              getting and undefined I could use the OR logical operator to return and empty string. By doing this I
 *              can modify its value and return nothing.
 */
export default function fixFiles(files) {
    return files.map(function (file) {
        return file + (this[file] ? `(${this[file]++})` : void (this[file] = 1) ?? '')
    }, {});
}

/**
 * Title: Same implementation but using an arrow-function instead (now we cannot use 'this' inside the arrow-function so
 *      we needed to declare a map outside of it).
 * Complexity: Θ(N)
 */
// export default  function fixFiles(files) {
//     let map = {};
//     return files.map(file => file + (map[file] ? `(${map[file]++})` : void (map[file] = 1) ?? ''));
// }