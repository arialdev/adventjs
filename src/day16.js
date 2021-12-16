/**
 * Problem description:
 Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

 Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer
 llegar al próximo objetivo.

 Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

 Símbolo       Valor
 .             1
 ,             5
 :             10
 ;             50
 !             100
 Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

 Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número
 correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

 decodeNumbers('...') // 3
 decodeNumbers('.,') // 4 (5 - 1)
 decodeNumbers(',.') // 6 (5 + 1)
 decodeNumbers(',...') // 8 (5 + 3)
 decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
 decodeNumbers('.;') // 49 (50 - 1)
 decodeNumbers('..,') // 5 (-1 + 1 + 5)
 decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
 decodeNumbers('.;!') // 49 (-1 -50 + 100)
 decodeNumbers('!!!') // 300
 decodeNumbers(';!') // 50
 decodeNumbers(';.W') // NaN
 */

/**
 * Title: Two-liner program via functional programming.
 * Complexity: Θ(N)
 * Comment:
 * - The problem is a conversor from roman numbers to decimal numbers.
 * - Because of the reduction function's nature this solution will always traverse every item in the list, so it will
 *      always has an O(N) time cost execution. The second solution is a bit more efficient, as we will see later.
 * 1. We need a data structure to work as a table for translation. We could use an object or a Map, both are fine. If we
 *      wanted to write this program in a single line we could (should not) just declare this object every time we
 *      wanted to access to it. It would be very evil, too much for me. I just wanted to let you know it is possible.
 * 2. The function's parameter 'symbols' is a string, but we cannot directly iterate every character on the string. We
 *      could firstly use String.prototype.split to create an array of characters from the string, or we could use the
 *      spread operator, as I did, to get the same result. I prefer the spread operator because it is more compact,
 *      both methods are fine.
 * 3. I decided that the easiest way to read roman numbers is to do it from right to left. This way when you have to do
 *      a subtraction it is easy because you just do it to the value that you already have. This is why I use the
 *      reduceRight function. In it's inner function I need an accumulator (the decimal result), the current symbol and
 *      the index. Index is important for subtracting, as I need to know which was the previous value (index + 1, as I'm
 *      reading from right to left).
 * 4. If there is any unknown symbol, I must return 'NaN'. However, the sad part of 'reducing' is that I cannot return
 *      any value until I have travers all the items on the list. That's why if I detect any unknown value I must continue
 *      traversing, sweeping along the NaN value. Because of this, I first must check if the accumulator is NaN, and if
 *      it does, return it to continue to the next iteration. In the second solution implemented I did not use
 *      'reduction' so ASAP I get a NaN the program ends. For doing this "checking" I use a ternary operator to
 *      implement the return value in a single line (NOT recommended on serious scenarios).
 * 5. If the symbol is contained in the translation object I only have to add it's value to the accumulator and return
 *      it. However, if it has a lower value than the next symbol (actually, the previously iterated one as I'm
 *      traversing the string from right to left), I must subtract it from the accumulator, or what it is the same, add
 *      it in a negative way.
 */

export default function decodeNumber(symbols) {
    let translation = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100};
    return [...symbols].reduceRight((acc, symbol, index) => (isNaN(acc) || !translation[symbol]) ? NaN : acc + translation[symbol] * (symbols[index + 1] && translation[symbols[index + 1]] > translation[symbol] ? -1 : 1), 0);
}


/**
 * Title: Iterative program reading from left to right
 * Complexity: O(N)
 * Comment:
 * - There are some differences from the previous solution. The rest is the same.
 *      ¤ This solution is iterative via a loop. There is no functional programming.
 *      ¤ There is no need to iterate every item when he have already found an error (NaN), so time complexity remains
 *          O(N) (worst scenario: all the symbols are known or the last symbol is unknown but to get there I had to
 *          traverse the whole string) but not Θ(N) (this notation means that both O and Ω have the same complexity), as
 *          it may be Ω(1) (best performing scenario, when the first symbol in the string is unknown so we stop at the
 *          very fist beginning).
 *      ¤ The string is read from left to right. In the previous solution's explanation I said that I found easier to
 *          read it from right to left, but I said that as an human being. Computers don't give a **** about how
 *          you, piece of flesh, do Maths. The way you decide to read the string has no impact on the solution or
 *          its performance. I just wanted to show you both directions are OK.
 */

// export default function decodeNumber(symbols) {
//     let translation = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100};
//     let result = 0;
//     for (let i = 0; i < symbols.length; i++) {
//         if (!translation[symbols[i]]) return NaN;
//         result += translation[symbols[i]] * (symbols[i + 1] && translation[symbols[i + 1]] > translation[symbols[i]] ? -1 : 1);
//     }
//     return result;
// }