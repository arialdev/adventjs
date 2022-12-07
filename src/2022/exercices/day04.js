/**
 * Problem description:
    Santa Claus needs to review his gift boxes to make sure he can pack them all in his sleigh.
    He has a series of boxes of different sizes, characterized by their length, width, and height.

    Your task is to write a function that, given a list of boxes with their sizes, determines whether
    it is possible to pack all the boxes in one so that each box contains another (which in turn
      contains another, and so on).

    Each box represents its measures with an object. For example: {l: 2, w: 3, h: 2}. This means
    that the box has a length of 2, a width of 3 and a height of 2.

    A box fits into another box if all the sides of the first are smaller than the sides of the
    second. The elves have told us that the boxes cannot be rotated, so you cannot put a box of 2x3x2
    in a box of 3x2x2. Let's see some examples:

    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ]) // true
    In the previous example, the smallest box fits into the largest box. Therefore, it is possible
    to pack all the boxes in one. Now let's see a case that does not:

    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ]

    fitsInOneBox(boxes) // false
    In the previous example, the smallest box fits into the middle box, but the middle box does
    not fit into the largest box. Therefore, it is not possible to pack all the boxes in one.

    Note that the boxes may not come in order:

    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ]

    fitsInOneBox(boxes) // true
    In the previous example, the first box fits into the third, and the third into the second.
    Therefore, it is possible to pack all the boxes in one.

    Things to keep in mind:

    The boxes cannot be rotated because the elves have told us that the machine is not ready.
    The boxes may come in any order.
    The boxes are not always squares, they could be rectangles.
*/

/**
 * 
 * Explicación:
 *  - Primero ordenamos la lista de cajas en orden ascendente, teniendo en cuenta
 *    las tres dimensiones de las mismas.
 *  - Después iteramos la lista de cajas ordenadas, comprobando que cada caja entra
 *    en la caja sucesora. Es decir, que cada una de sus tres dimensiones es inferior
 *    a las dimensiones respectivas de la caja siguiente. En caso contrario, devolvemos
 *    FALSE.
 *  - Si terminamos de recorrer la lista sin devolver false significa que no encontramos
 *    ningún problema, y devolvemos TRUE.
 *  - Nótese el truco de utilizar una caja con dimensiones de valor INFINITO para que la
 *    última caja de la lista no haga fallar el bucle al no encontrar una caja sucesora.

 */
export default function fitsInOneBox(boxes) {
  const sortedBoxes = [...boxes].sort((a, b) => {
    if (b.l > a.l || b.w > a.w || b.h > a.h) return -1;
    return 1;
  });
  let result = true;
  let i = 0;
  while (result && i < sortedBoxes.length) {
    const a = sortedBoxes[i];
    const b = sortedBoxes[++i] || { l: Infinity, w: Infinity, h: Infinity };
    result = a.l < b.l && a.w < b.w && a.h < b.h;
  }
  return result;
}