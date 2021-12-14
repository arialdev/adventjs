/**
 * Description of the problem:
 Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy
 difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser
 niños, igual han colado más espacios de la cuenta)

 Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que
 significa que está tachado y no se tiene que contar.

 Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos
 el texto:

 const carta = 'bici coche balón _playstation bici coche peluche'
 Al ejecutar el método debería devolver lo siguiente:

 const regalos = listGifts(carta)

 console.log(regalos)

 {
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}

 Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!
 */

/**
 * Title: Filtering and grouping items via functional programming (filter + reduce).
 * Complexity: Θ(N)
 * Comment:
 * 1. We use trim function to remove undesired blank spaces, as the problem description tells us that this may happen.
 * 2. We split the text into a list of words using the inner spaces as separators (we removed the outter spaces in step 1). For this
 *      we use the regex '/s' that means any whitespace, next line, etc.
 * 3. We filter from the list those words starting with underscore _, as the problem descriptions requires.
 * 4. We use reduce function to count the occurrences of the listed items:
 *      4.1. We set as the accumulator an empty object. This will be the object that at the end we will return.
 *      4.2. We will iterate the list of words, and for every word we will check if there is an existing key in the
 *      accumulator with that same word. If it does, we just increment it's value 1 unit. If not, we do create an entry
 *      in the accumulator with the word as key and value 1 as it's the first occurrence.
 */

export default function listGifts(letter) {
    return letter.trim().split(/\s+/).filter(w => !w.startsWith('_')).reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}