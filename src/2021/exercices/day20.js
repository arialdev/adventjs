/**
 * Problem description:
 En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta
 ✉️ tiene que contener todas las letras del alfabeto.

 Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto
 que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

 Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por
 ejemplo la á y la ä cuenta como una a.

 Vamos a ver unos ejemplos de frases:

 pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
 pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

 pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
 pangram('De la a a la z, nos faltan letras') // false
 Y ya que estás... ¿Cuál es tu pangrama favorito? ¡Compártelo en nuestra comunidad de Discord!
 */

/**
 * Title: Normalizing every character and removing it from the alphabet.
 * Complexity: O(N);  Ω(27) ~= Ω(1)
 * Comment:
 * 1. First we transform the string into a list of characters.
 * 2. Then we create a set including all the characters in the Spanish alphabet. The idea is to remove all the
 *      characters of from the set and then check if the set is empty, which means the letter contained all the
 *      characters in the spanish alphabet.
 * 3. On every iteration we must normalize every character, so an 'à' counts as an 'a'. WARNING: we must take caution
 *      because with the wrong regex we would be transforming 'ñ' into 'n' and we don't want that, as we are using
 *      Spanish alphabet and 'ñ' is an important character for Spanish speakers. We'd love to get on well with them...
 *
 *      - Another option would be to normalize the letter directly, but that would mean obtaining an exact time complexity
 *      of O(N), in other words, always iterate through all the characters in the letter during the normalization. This
 *      way, we can return a solution as soon as we receive the 27 Spanish's alphabet characters.
 *      - It's important to clarify that the author is not an expert on this area, so he is not sure about the performance
 *      of normalizing a single character over the whole text. He just applied common sense. He doesn't know why he is
 *      speaking in third person...
 * 4. If we get out from the loop that means the set is still not empty, so we return false.
 */
export default function pangram(letter) {
    const characters = [...letter];
    const charactersSet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    for (const character of characters) {
        charactersSet.delete(character.toLowerCase().normalize("NFD").replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2").normalize());
        if (!charactersSet.size) return true;
    }
    return false;
}