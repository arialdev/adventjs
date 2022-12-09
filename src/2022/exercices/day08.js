/**
 * Problem description:
    Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos,
    pero no tienen claro si las piezas que tienen sirven.

    Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es
    válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

    Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

    Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

    checkPart("uwu") // true
    // "uwu" es un palíndromo sin eliminar ningún carácter

    checkPart("miidim") // true
    // "miidim" puede ser un palíndromo después de eliminar la primera "i"
    // ya que "midim" es un palíndromo

    checkPart("midu") // false
    // "midu" no puede ser un palíndromo después de eliminar un carácter
*/

/**
 * 
 * Explicación:
 *  - La forma más sencilla de comprobar si una palabra es un palíndromo es utilizar dos punteros, uno que
 *    comienze por el principio y otro que lo haga por el final, ir incrementándolos y decrementándolos
 *    respectivamente hasta que se crucen. En cada paso, se habrá que comprobar si los caracteres a los que
 *    apuntan son iguales. En caso afirmativo, se continúa con la iteración. En caso contrario, se termina
 *    inmediatamente la función retornando FALSE.
 *  - Aquí tenemos la dificultad añadida de que se nos permite errar en el palíndromo por un caracter, por lo que
 *    es un caso especial que habrá que tener en cuenta. Yo lo he hecho con la variable charactersRemovedCount, que
 *    jamás deberá superar el 1 como valor.
*/

export default function checkPart(part) {
  let charactersRemovedCount = 0;
  let isPalindrome = true;

  let start = -1;
  let end = part.length;
  while (isPalindrome && charactersRemovedCount < 1 && start < end) {
    start++;
    end--;
    if (part[start] === part[end]) continue;
    if (part[start + 1] === part[end]) start++;
    else if (part[start] === part[end - 1]) end--;
    else return false;
    charactersRemovedCount++;
  }
  return isPalindrome;
}