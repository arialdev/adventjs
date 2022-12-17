/**
 * Explicación:
 *  - La entrada no es una lista de caracteres, sino un string que separa los caracteres con espacio. La salida
 *    esperada no es una lista de listas de caracteres, sino una lista de caracteres separados por espacios. Esto
 *    es importante, puesto que nos resulta molesto ya que la forma más fácil de abordar este ejercicio es tratando
 *    las filas como arrays de caracteres y no como strings con espacios. Mi estrategia ha sido trabajar con arrays
 *    de caracteres y finalmente mapear a la salida deseada.
 *  - Para ello cogí la base, la transformé en un array de caracteres, creé una lista de listas de tamaño N, siendo N
 *    el número de elementos de la base (ya que esta también es la altura del árbol). Por último añado la base en forma
 *    de lista de caracteres al final de mi arbol: ya tengo mi lista de listas, sólo queda rellenarla (salvola base,
 *    que ya la tenemos).
 *  - Como voy desde la base hasta arriba, el bucle FOR que recorre el arbol verticalmente está invertido. Sin embargo,
 *    el bucle FOR que recorre la anchura de cada fila del arbol no hace falta que lo esté.
 *  - Para determinar qué adorno colocar podemos crear una función que en función de los objetos base devuelva:
 *      - El objeto de su hijo izquierdo si su hijo izquierdo y derechos son iguales.
 *      - El elemento faltante de una lista [a,b,c] si sus hijos están en esa lista y no son iguales. Esto podría hacerse así:
 *        const getParentItem = (left, right) => left === right ? left : ['B', 'R', 'P'].filter(item = > item !== left && item !== right)[0];
 *    Sin embargo, yo preferí meter todas las posibilidades en un objeto y utilizarlo como mapa. Aquí para gustos: colores.
*/

export default function decorateTree(base) {
  const posibilities = {
    'B_B': 'B',
    'R_R': 'R',
    'P_P': 'P',
    'B_P': 'R',
    'B_R': 'P',
    'P_B': 'R',
    'P_R': 'B',
    'R_B': 'P',
    'R_P': 'B',
  };
  const baseArray = base.split(' ');
  const tree = new Array(baseArray.length);
  tree[baseArray.length - 1] = baseArray;
  for (let row = baseArray.length - 1; row > 0; row--) {
    const newRow = [];
    for (let itemIndex = 0; itemIndex < tree[row].length - 1; itemIndex++) {
      const key = `${tree[row][itemIndex]}_${tree[row][itemIndex + 1]}`;
      newRow.push(posibilities[key]);
    }
    tree[row - 1] = newRow;
  }
  return tree.map(row => row.join(' '));
}