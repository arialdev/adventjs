/**
 Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

 Mi cine favorito tiene dos posibilidades:

 • Entrada de un sólo uso: Cuesta 12$ por cada película.

 • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que
 se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
 Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:

 // Entrada normal: 12$ * 3 = 36$
 // Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
 Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta
 fidelidad o no.

 shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
 shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
 La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la
 tarjeta fidelidad. 😜
 */

/**
 * Title: Recursion + ternary operator + arrow function.
 * Complexity: Θ(N)
 * Comment:
 * -I spent some time trying to implement the shortest solution. This is the best I could get.
 * -The idea is to create a one-liner tail recursive function and then to call it with the initial params.
 * 1. On every iteration the ticket's counter (times) value will be decreased, while the returning value would be
 * increased (the ticket's cost)
 * 2. The idea of the algorithm is to get to the base case (tickets = 0) and then on every iteration add the current
 * ticket price to the accumulated price. This way we will be iterating twice (Θ(2N) ~= Θ(N))
 */
export default function shouldBuyFidelity(times) {
    const calculateDiscount = t => t === 0 ? 0 : Math.pow(0.75, t) * 12 + calculateDiscount(t - 1);
    return 12 * times >= 250 + calculateDiscount(times);
}