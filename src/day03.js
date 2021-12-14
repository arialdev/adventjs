/**
 * Description of the problem:
 El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

 Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

 Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan
 vacíos.

 ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas.
 Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la
travesura del Grinch!
 */

/**
 * Title: Checking valid strings via regular expressions
 * Comment:
 * 1. To scape the parenthesis () and brackets [] we use the backwards slash \.
 * 2. The | character is a logical OR
 * 3. The first part of the logical operation, '\(\)', looks for empty parenthesis ()
 * 4. The second part of the logical operation, '[\[\]{}]', looks for brackets, '[' or ']',  and braces, '{' or '}'.
 *      The first and the last characters of the expressions are also brackets, but their not escpaed, which means that
 *      every character inside them are what we are looking for: '[' or ']' or '{' or '}'.
 * 5. The third part of the expression, '\([^\)]*$', looks for unclosed parenthesis. It only works for 1-depth
 *      parenthesis, enough for this game.
 */

export default function isValid(letter) {
    return letter.match(/\(\)|[\[\]{}]|\([^\)]*$/) == null
}