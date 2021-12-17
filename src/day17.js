/**
 * Problem description:
 Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

 La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama, ya que existen rangos
 de nivel de experiencia.

 Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número
 de paquetes que puede llevar esa persona y todos los transportistas que tiene en su equipo. Lo malo es que los datos
 están almacenados de una forma un poco rara en un array:

 El array contiene otros arrays que contienen los datos de cada transportista
 transportista[0] -> Nombre/ID del Transportista
 transportista[1] -> Paquetes que gestiona en un día
 transportista[2] -> Array con sus subordinados

 Para que lo veamos en código, tanto el array, como la función de dos parámetros para conseguir el número deseado:

 const carriers = [
 ['dapelu', 5, ['midu', 'jelowing']],
 ['midu', 2, []],
 ['jelowing', 2, []]
 ]

 countPackages(carriers, 'dapelu') // 9
 // 5 de dapelu, 2 de midu y 2 de jelowing = 9

 const carriers2 = [
 ['lolivier', 8, ['camila', 'jesuspoleo']],
 ['camila', 5, ['sergiomartinez', 'conchaasensio']],
 ['jesuspoleo', 4, []],
 ['sergiomartinez', 4, []],
 ['conchaasensio', 3, ['facundocapua', 'faviola']],
 ['facundocapua', 2, []],
 ['faviola', 1, []]
 ]

 countPackages(2, 'camila') // 15
 // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
 ¡Ten cuidado! Como has visto en el segundo ejemplo, el organigrama puede tener diferentes niveles y además nos viene
 información que puede ser que no necesitemos. Debemos tener en cuenta el parámetro de carrierID para calcular bien el
 número y contar todo su equipo.
 */

/**
 * Title: Iterative solution
 * Complexity: O(N), Ω(1)
 * Comment:
 * - The best way to store this information would be map, but we got this messy array instead.
 * - The idea of my algorithm is to iterate over all the carriers until we find our required carrier and their subordinates.
 *      If this were a tree, this would mean to find our desired element and travers its subtree. As we do not have a
 *      tree we will have to travers through undesired items, although we already found our desired first carrier,
 *      because we do not have a subtree to iterate so we have to continue iterating the main list.
 * 1. To know if I'm done searching I use a Set. I initialize this set with my required ID and after I find it I
 *      continue iterating adding its subordinates and so on. If my set is ever empty this will mean that I'm done
 *      searching, as there won't be any subordinates left. This way, I do not have to iterate every element unless the
 *      last item was a subordinate.
 * 2. As in ES6 Set deleting and adding have a BigO time complexity of O(1), this is a very efficient algorithm.
 * 3. In the second IF i just check the result of deletion. I do it this way to save a line of code, as both 'delete'
 *      and 'has' methods are O(1) and returns true if they found the item or false otherwise. As the returning result
 *      is the same thing, I use deletion instead of using firs 'has' and then, later in the if's body,  'delete'.
 */

export default function countPackages(carriers, carrierID) {
    let wanted = new Set().add(carrierID);
    let result = 0;
    for (const carrier of carriers) {
        if (!wanted.size) return result;
        if (wanted.delete(carrier[0])) {
            carrier[2].forEach((subordinate) => wanted.add(subordinate));
            result += carrier[1];
        }
    }
    return result;
}