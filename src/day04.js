/**
 * Description of the problem:
 ¡Es hora de poner el árbol de navidad en casa! 🎄

 Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo,
 100.

 Si le pasamos el argumento 5, se pintaría esto:

 ____*____
 ___***___
 __*****__
 _*******_
 *********
 ____#____
 ____#____
 Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los
 espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
 Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

 Otro ejemplo con un árbol de altura 3:

 __*__
 _***_
 *****
 __#__
 __#__
 Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el
 árbol.
 */

/**
 * Title: Building the tree iteratively concatenating text.
 * Comment:
 * 1. Formulas are not cleaned as in the second implementation so people can understand where do they come from.
 * 2. This is a readable solution, but a very boring one.
 */

export default function createXmasTree(height) {
    function fillRow(start, end, width, character = '*') {
        let text = '';
        for (let i = 0; i < start; i++) text += '_';
        for (let i = start; i < end; i++) text += character;
        for (let i = end; i < width; i++) text += '_';
        return text;
    }

    let tree = '';
    const width = height * 2 - 1;
    for (let h = 1; h < height + 1; h++) {
        let rowWidth = h * 2 - 1;
        let rowSpaces = (width - rowWidth) / 2;
        tree += fillRow(rowSpaces, width - rowSpaces, width);
        tree += '\n';
    }
    let rowWidth = 1;
    let rowSpaces = (width - rowWidth) / 2;
    return `${tree}${fillRow(rowSpaces, width - rowSpaces, width, '#')}\n${fillRow(rowSpaces, width - rowSpaces, width, '#')}`;
}

/**
 * Title: Building the tree in just two lines using ternary operator and recursion.
 * Comment:
 * 1. The first line declares a very unreadable recursive function, and the second line calls it and returns its value.
 * 2. The inner function works as a reduction function, as it has an accumulator (string) and the value of the iteration
 * h.
 * 3. For every line created we add a newLine '\n'. As when we would be finished there would be one extra undesired
 * newLine, we need to trim it off using the trimRight function. We call this function in the base case just before
 * returning the whole finished tree.
 * 3. First we evaluate with a ternary operator if we are in the base case, which is being over the required height (we
 *      go from 1 to N instead of 0 to N-1 because of mathematical reasons).
 * 4. If we are in the base case it means we have already created the "leaves", so only the trunk is missing. For that
 * we just print height-1 underscores using the String.prototype.repeat function, an # and, again, height-1 underscores.
 * We need to repeat this new line in order to get the second line of the base, and we do use again the repeat function.
 * 5. If the ternary operator evaluates that we are not in the base case it means we need to add to the accumulator, at
 * least, an extra line for the leaves. It's a similar procedure than in the base case, but with simplified formulas:
 *      5.1. We evaluate the width of the whole tree by multiplying its height by 2 and subtracting it 1 unit:
 *          width = height * 2 - 1.
 *      5.2. Now we can evaluate the width of the leaves at an specific height by multiplying its height by 2 and
 *          subtracting it 1 unit: heightWidth = h * 2 - 1. We see both formulas are quite similar.
 *      5.3. However, we don't know where the tree starts in the horizontal axis at this height. We need to check it out
 *          using the tree width. We also want to know how many free spaces will be at every side to add the
 *          underscores: underscoreSpaces = (treeWidth - heightWidth) / 2.
 *          If we simplify this expression we get: underscoreSpaces =  height - h
 *      5.4. Now we already have the number of underscores for each side and the number of leaves, so we add it in the
 *          same way we did in the base case.
 *      5.5. As it is a recursive function we shall return the same function with it's height increased in one unit and
 *      the new created line concatenated to the received accumulator.
 */
export default function createXmasTree(height) {
    const createTree = ((acc, h) => h > height ? acc + `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}\n`.repeat(2).trimRight() : createTree(acc + `${'_'.repeat(height - h)}${'*'.repeat(2 * h - 1)}${'_'.repeat(height - h)}\n`, h + 1));
    return createTree("", 1);
}