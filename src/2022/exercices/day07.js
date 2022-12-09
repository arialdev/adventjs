/**
 * Problem description:
    In the Santa Claus stores they are doing inventory. There are three stores (which is represented
    as an Array each). In each store there are gifts.

    We have been asked to write a program that tells us what gifts we have to buy to replenish our stores
    now that Christmas is approaching. A gift must be replenished when there is only stock in one of the
    three stores.

    For example, if we have the following stores:

    const a1 = ['bike', 'car', 'bike', 'bike']
    const a2 = ['car', 'bike', 'doll', 'car']
    const a3 = ['bike', 'pc', 'pc']

    The store a1 has "bike" and "car".
    The store a2 has "car", "bike" and "doll".
    The store a3 has "bike" and "pc".

    The gift "doll" and "pc" are only in the stores a2 and a3 respectively.


    const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']
    As you can see, the stores can have the same gift repeated several times. But, no matter how many
    existences there are in a store, if we do not have it in the other two, we must replenish it to have
    better distribution.

    📝 To sum up
    1. Create a function getGiftsToRefill that receives three Array as parameters.
    1. The function must return an Array with the gifts to be replenished.
    3. A gift must be replenished when there is only stock in one of the three stores.
    4. If there is no gift to replenish, the function must return an empty Array.
    5. If there is more than one gift to replenish, the function must return an Array with all the gifts that
    need to be replenished.
*/

/**
 * 
 * Explicación:
 *  - Creamos una lista que contenga las listas que recibimos como parametros. Así podremos trabajar de forma
 *    más funcional.
 *  - No nos interesa que una tienda tenga más de una unidad de stock de un item, por lo que eliminamos las 
 *    repeticiones dentro de cada tienda. Para ello transformamos cada lista de items en un conjunto y para así
 *    volver a transformar el conjunto en una lista. Ya no tenemos repeticiones en cada tienda.
 *  - A continuación juntamos los items de cada tienda en una única lista común. Ahora si hubiese repeticiones estas
 *    pertenecerían a tiendas distintas.
 *  - Por tanto, filtramos la lista común con los elementos que estén presentes en dicha lista una única vez. Esta
 *    operación es O(N2) y podría implementarse de forma más eficiente mediante el algoritmo de la sliding window,
 *    pero quedaba feo en el código implementar tal cosa 🤪.
 */

export default function getGiftsToRefill(a1, a2, a3) {
  return [a1, a2, a3]
    .map(store => [...new Set(store)])
    .reduce((acc, store) => [...acc, ...store], [])
    .filter((currentItem, _, itemList) =>
      itemList.filter(item => item === currentItem).length === 1);
}