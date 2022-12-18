/**
 * Explicación:
 * Este problema consiste en ir procesando la entrada, como si de una cadena de montaje se tratase, modificando
 * el string hasta obtener la solución. Por favor, JavaScript, implementa el operador Pipe de una santa vez.
 * 
 * En este caso, no veo necesario explicar cada paso uno a uno, pues creo que el nombre de las funciones es 
 * suficientemente descriptivo. En este problema utilicé expresiones regulares. ¿Por qué? Porque me molan jeje,
 * pero no es necesario (y ni siquiera son buenas para el rendimiento en algunos casos).
 * 
 * Nota: como no podemos disponer de la función String.prototype.replaceAll, debido a que AdventJS utiliza ES2017,
 * hemos tenido que utilizar el flag para regex 'g'. Intenté implementarme mi propio pollyfill para esta función, 
 * pero AdventJS restringe la modificación de 'this'.
 *
*/

export default function fixLetter(letter) {
  const removeMultipleWhiteSpaces = text => text.replace(/\s+/g, ' ');
  const cleanCommasSpaces = text => text.replace(/\s*,\s*/g, ', ');
  const cleanPeriodsSpaces = text => text.replace(/\s*\.\s*/g, '. ');
  const removeMultipleQuestionMarks = text => text.replace(/\s*\?+/g, '?');
  const uppercaseSantaClaus = text => text
    .replace(/santa claus/gi, 'Santa Claus');
  const upperCaseWordsAfterPunctuation = text => {
    text = text[0].toLocaleUpperCase() + text.substring(1);
    const regex = /[.!?]\s[a-z]/gi;
    return text.replace(regex,
      match => match[0] + ' ' + match[2].toUpperCase()
    );
  };
  const addFinalPeriod = text => text +
    (text.charAt(text.length - 1).match(/[\.\?\!]$/) ? '' : '.');

  let formattedText = letter;
  formattedText = removeMultipleWhiteSpaces(formattedText);
  formattedText = cleanCommasSpaces(formattedText);
  formattedText = cleanPeriodsSpaces(formattedText);
  formattedText = removeMultipleQuestionMarks(formattedText);
  formattedText = uppercaseSantaClaus(formattedText);
  formattedText = formattedText.trim();
  formattedText = upperCaseWordsAfterPunctuation(formattedText);
  formattedText = addFinalPeriod(formattedText);
  return formattedText;
}