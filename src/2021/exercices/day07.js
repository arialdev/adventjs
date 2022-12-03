/**
 * Problem description:
 Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no
 encuentra nada.

 Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que
 buscamos.

 La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos
 unos ejemplos:

 const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

 contains(almacen, 'camiseta') // true

 const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

 contains(otroAlmacen, 'gameboy') // false
 Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede
 tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.
 */

/**
 * Title: Recursive solution
 * Comment:
 * 1. There are two base case:
 *      1.1. Case A: the store param is actually the requested product, we return true;
 *      1.2. Case B: The store param is falsy, not an object (could be another item in the store but not the requested
 *      one), it is an empty object or it is an Array (in JS arrays are objects too so the second condition would be
 *      TRUE). In any of those situations we return FALSE.
 *
 * 2. Otherwise, we have an non-empty object. We extract its values into an array and iterate through it applying
 * recursion to every item in order to find the requested product. If in any of these iterations we find it, we return
 * TRUE. Otherwise, we return FALSE.
 */
export default function contains(store, product) {
    if (store === product) return true;
    if (!(store && typeof store == 'object' && Object.values(store).length) || Array.isArray(store)) return false;

    const values = Object.values(store);
    for (let i = 0; i < values.length; i++)
        if (contains(values[i], product)) return true;
    return false;
}