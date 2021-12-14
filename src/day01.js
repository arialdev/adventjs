/**
 * Description of the problem:
 Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con
 todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden,
 las mayúsculas o espacios.

 Por ejemplo, si tenemos las ovejas:

 const ovejas = [
 { name: 'Noa', color: 'azul' },
 { name: 'Euge', color: 'rojo' },
 { name: 'Navidad', color: 'rojo' },
 { name: 'Ki Na Ma', color: 'rojo'},
 { name: 'AAAAAaaaaa', color: 'rojo' },
 { name: 'Nnnnnnnn', color: 'rojo'}
 ]
 Al ejecutar el método debería devolver lo siguiente:

 const ovejasFiltradas = contarOvejas(ovejas)

 console.log(ovejasFiltradas)

 // [{ name: 'Navidad', color: 'rojo' },
 //  { name: 'Ki Na Ma', color: 'rojo' }]
 Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe
 tener ambas.
 */

/**
 * Title: Filtering sheeps using functional programming (filter) and regular expressions.
 * Complexity: Θ(N)
 * Comment: We iterate along the whole list and we just keep the sheeps with the given conditions.
 * For letters validation we use a regular expression '[nN][aA]|[aA][nN]':
 *  ¤ The '|' character specifies that we are looking for strings that match the left part ([nN][aA]) or the right part
 *    ([aA][nN])
 *  ¤ [nN] means that we are looking for an 'n' or an 'N'. It's the same with [aA].
 *    Putting both following each other means that we are looking an 'n' or an 'N' followed by an 'a' or an 'A'.
 *  ¤ The right part means the same but in the oposite order.
 */
export default function contarOvejas(ovejas) {
    return ovejas.filter(oveja => oveja.color === 'rojo' && oveja.name.match(/[nN][aA]|[aA][nN]/))
}