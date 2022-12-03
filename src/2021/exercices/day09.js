/**
 * Problem description:
 En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

 Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de
 valores u objetos, a través de una función o de una propiedad.

 Nos trae un montón de ejemplos:

 groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
 groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
 groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

 groupBy(
 [1397639141184, 1363223700000],
 timestamp => new Date(timestamp).getFullYear()
 )
 // { 2013: [1363223700000], 2014: [1397639141184] }

 groupBy([
 { title: 'JavaScript: The Good Parts', rating: 8 },
 { title: 'Aprendiendo Git', rating: 10 },
 { title: 'Clean Code', rating: 9 },
 ], 'rating')
 // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
 Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con
 claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada
 elemento. Luego los valores son un array de los valores que tengan la misma llave.

 La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.
 */

/**
 * Title: Functional solution via reduction.
 * Complexity: Θ(N)
 * Comment:
 * 1. The solution is simple: applying the grouping condition to every value on the collection and storing its results
 * on an object. For that we use reduction.
 * 2. However, the implementation of the reduction function depends on if the grouping condition is a callable function
 * or a property from the items in the collection. Because of this we require two blocks of code, quite similar among them.
 * 3. There would be an alternative to only have one block of code: checking the grouping condition inside the reduction
 * function. However, I dont quite like this idea, because you would be checking it on every iteration, N times. Some
 * people defend this is not a terrible idea, as the checking cost would not be very significant, and the complexity of
 * the algorithm resides the grouping condition itself. There is no bad or good idea, you may chose whatever you prefer.
 */
export default function groupBy(collection, it) {
    if (typeof (it) === 'function')
        return collection.reduce((result, item) => {
            const key = it(item);
            if (result[key]) result[key].push(item);
            else result[key] = [item];
            return result;
        }, {});

    return collection.reduce((result, item) => {
        const key = item[it];
        if (result[key]) result[key].push(item);
        else result[key] = [item];
        return result;
    }, {});
}