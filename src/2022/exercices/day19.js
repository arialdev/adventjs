/**
 * Explicación:
 * Aquí presento la solución que mejor puntuación me ha dado.
 * Básicamente es, aprovechando que en JS las listas son dinámicas, crear un array vacío y por cada elemento
 * de la lista de positions añadir el juquete que comparta índice con ese item en la posición del nuevo array
 * que indique el mismo elemento. Es decir, que si tuviéramos:
 * sortToys(['ball', 'doll', 'car'], [2, 1, 0]), y una lista vacía para el resultado: []
 * Iteraríamos el array de positions. El primer elemento es 2, con índice 0. Es decir, que en la posición 2 del
 * nuevo array meteríamos el juguete que comparta índice con esa posición:
 *  resultado: [undefined, undefined, 'ball'].
 * Continuaríamos con el segundo elemento del array de posiciones, que es el 1 y tiene índice 1. Hacemos lo mismo:
 *  resultado: [undefined, 'doll', 'ball']
 * Por último, el elemento 0 con índice 2:
 *  resultado: ['car', 'doll', 'ball'].
 * 
 * Pero cuidado, las posiciones no tienen por qué ir de [0,N-1]. El enunciado nos advierte que pueden tener un
 * 'desfase'. Es decir, si tuviésemos un desfase (o desplazamiento, como prefieras), de 2 unidades, nuestro ejemplo
 * anterior sería [4, 3, 2]. El truco de usar los valores del array de positions como índices del nuevo array no funciona.
 * Por ello, la opción más eficiente es encontrar el desfase y restarlo a cada valor cuando vayamos a usarlo como índice.
 *
*/

export default function sortToys(toys, positions) {
  const gap = positions
    .reduce((acc, position) => Math.min(acc, position), Infinity);
  return positions
    .reduce((acc, position, i) => {
      acc[position - gap] = toys[i];
      return acc;
    }, []);
}