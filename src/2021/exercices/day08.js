/**
 * Problem description:
 Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de
 Bitcoin, y otras monedas, bajase un 25%.

 Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la
 ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

 La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que
 no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda
 de la compra.

 Por ejemplo:

 const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
 maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

 const pricesEth = [10, 20, 30, 40, 50, 60, 70]
 maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

 Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

 const pricesDoge = [18, 15, 12, 11, 9, 7]
 maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

 const pricesAda = [3, 3, 3, 3, 3]
 maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
 */

/**
 * Title: Standard solution.
 * Complexity: O(N log N)
 * Comment:
 * 1. The adopted idea is the iteration of the array and on every iteration we do another search throw the right part of
 * the array looking for the minimum highest value for selling.
 * 2. If we find a higher value for selling than the value we are studying for buying, we compare it's difference to the
 * best previous value. If it is higher, which means we got a better profit, we keep it and resume the search.
 */
export default function maxProfit(prices) {
    let record = -1;
    for (let buy = 0; buy < prices.length - 1; buy++) {
        for (let sell = buy + 1; sell < prices.length; sell++) {
            let tmpProfit = prices[sell] - prices[buy];
            if (tmpProfit > record && tmpProfit > 0) record = tmpProfit;
        }
    }
    return record
}