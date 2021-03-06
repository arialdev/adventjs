/**
 * Problem description:
 Ayer, en noche buena, una fam铆lia cen贸 por todo lo alto... Con tanta copa 馃嵕 encima todav铆a no han retirado los platos
 y la comida de ayer...

 Un ratoncillo llamado midurat 馃惌, que vi贸 ayer el fest铆n escondido, est谩 relami茅ndose los bigotes al ver todos los
 manjares que hay en el comedor.

 Eso s铆, hay que tener cuidado 馃樁 y s贸lo hacer los movimientos correctos para comer algo. Por eso, el rat贸n, que se ha
 visto los v铆deos de midudev, va a crear una funci贸n para saber si su pr贸ximo movimiento es correcto o no 鉁?.

 El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays)
 donde cada posici贸n puede ser:

 Un espacio vac铆o es que no hay nada
 Una m es el rat贸n
 Un * es la comida
 Vamos a ver unos ejemplos:

 const room = [
 [' ', ' ', ' '],
 [' ', ' ', 'm'],
 [' ', ' ', '*']
 ]

 canMouseEat('up',    room)   // false
 canMouseEat('down',  room)   // true
 canMouseEat('right', room)   // false
 canMouseEat('left',  room)   // false

 const room2 = [
 ['*', ' ', ' ', ' '],
 [' ', 'm', '*', ' '],
 [' ', ' ', ' ', ' '],
 [' ', ' ', ' ', '*']
 ]

 canMouseEat('up',    room2)   // false
 canMouseEat('down',  room2)   // false
 canMouseEat('right', room2)   // true
 canMouseEat('left',  room2)   // false
 隆Ten en cuenta que el rat贸n quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!
 */

/**
 * Title: Iterating over the matrix until find the mouse, then check the requested position.
 * Complexity: O(N); 惟(1)
 * Comment:
 * - Caution: accessing to a non-existing position in the matrix will make the program crash. Because of that, in the
 *      first two scenarios, up and down, we must ensure that the existing row exists. If it does not, it may return
 *      undefined. Tests expect a TRUE or FALSE returning, no TRUTHY or FALSE. Because of this, returning undefined
 *      won't work, so we use the logical NULLISH operator ?? to return FALSE in these situations.
 */
export default function canMouseEat(direction, game) {
    for (let r = 0; r < game.length; r++)
        for (let c = 0; c < game[r].length; c++)
            if (game[r][c] === 'm') {
                if (direction === 'up') return (game[r - 1] && game[r - 1][c] === '*') ?? false;
                else if (direction === 'down') return (game[r + 1] && game[r + 1][c] === '*') ?? false;
                else if (direction === 'left') return game[r][c - 1] === '*' ?? false;
                else if (direction === 'right') return game[r][c + 1] === '*' ?? false;
            }
    return false;
}
