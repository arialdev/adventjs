/**
 * Explicación:
 * Resumen: tenemos que agrupar un array de string en orden y por tamaño de los elementos.
 * - Nuestra variable solución será giftPacks, y en ella iremos añadiendo los distintos
 *   paquetitos según los vayamos identificando.
 * - bagWeight será nuestra 'báscula'. En ella iremos pesando los distintos elementos que
 *   componen un paquetito para no pasarnos.
 * - currentPack será el paquetito que estamos completando en ese momento. Cuando se
 *   'cierre', vaciaremos el array y continuaremos haciendo paquetitos con el resto de regalitos.
 * - El proceso es muy iterativo. Recorremos la lista de regalos. Si el peso de ese regalo, más
 *   el peso total de los regalos que hemos metido en el paquetito actual, supera el peso máximo
 *   válido, significa que tenemos que cerrar el paquetito con los regalos previos y crear un nuevo
 *   paquetito cuyo primer elemento sea este regalito que estábamos estudiando.
 * - Sin embargo, se nos pide un array de paquetitos en forma de string, es decir, un array de
 *   strings, y nosotros tenemos una array de array de strings. Para eso, por cada paquetito, en
 *   este momento un array de strings, ejecutamos el método 'join' para agrupar los elementos en
 *   texto. Así obtenemos la solución deseada.
 *
*/

export default function carryGifts(gifts, maxWeight) {
  const giftsPacks = [];
  let bagWeight = 0;
  let currentPack = [];
  for (let giftIndex = 0; giftIndex < gifts.length; giftIndex++) {
    if (bagWeight + gifts[giftIndex].length <= maxWeight) {
      bagWeight += gifts[giftIndex].length;
      currentPack.push(gifts[giftIndex]);
    }
    else {
      if (currentPack.length) {
        giftsPacks.push(currentPack.join(' '));
      }
      bagWeight = 0;
      currentPack = [];
      if (gifts[giftIndex].length <= maxWeight) {
        bagWeight += gifts[giftIndex].length;
        currentPack.push(gifts[giftIndex]);
      }
    }
  }
  if (currentPack.length) {
    giftsPacks.push(currentPack.join(' '));
  }
  return giftsPacks;
}