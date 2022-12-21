/**
 * Explicación:
 * Este problema es una variante del famoso problema de la máquina expendedora, donde dado un array de monedas con
 * el nombre de la moneda y su valor, y dado un precio, debemos calcular qué y cuántas monedas a utilizar para llegar
 * a ese precio minimizando el número de monedas. Aquí se nos introduce un nuevo problema: siempre tener más monedas
 * pequeñas que grandes.
 *  - Mi estrategia ha sido similar a la que uso para resolver el problema base: iterar desde el reno de mayor capacidad
 *    hasta el de menor capacidad descontando dicha capadidad del peso que debo soportar.
 *    Es decir, si tengo que llevar un peso 35 y tengo estos renos: 
 *    [
 *     {nombre:Juan,capacidad:20},
 *     {nombre:Carmen,capacidad:10},
 *     {nombre:Itziar,capacidad:5},
 *     {nombre:Jon,capacidad:1}
 *    ]
 *    Empezaría con el primer reno: Juan, y descontaría a mi peso su capacidad: 35-20 = 15. Vuelvo a intentarlo con el
 *    mismo reno, pero veo que ya no puedo descontarle 20 a 15, por lo que paso al siguiente reno.
 *    Con Carmen sí puedo descontarle 10 a 15, lo hago, consiguiendo un peso restante de 5, y veo que tampoco puedo seguir
 *    con Carmen. Bajo a Itziar, que sí puede con esos 5 de peso, lo descuento. Ahora mismo mi peso restante es de 0. En el
 *    problema básico, ya habríamos terminado. Sin embargo, luego toca Jon. Vemos que Jon no puede seguir restando.
 *    Evaluamos el resultado hasta ahora: 
 *    [
 *     {nombre:Juan,capacidad:20, carga: 1},
 *     {nombre:Carmen,capacidad:10, carga: 1},
 *     {nombre:Itziar,capacidad:5, carga: 1},
 *     {nombre:Jon,capacidad:1, carga: 0}
 *    ]
 *    No se está cumpliendo que cada reno deba llevar más carga que su reno superior en capacidad: Itziar está cargando
 *    más que Jon. Por tanto, debemos descontar a Itziar para que Jon pueda cargar:
 *    [
 *     {nombre:Juan,capacidad:20, carga: 1},
 *     {nombre:Carmen,capacidad:10, carga: 1},
 *     {nombre:Itziar,capacidad:5, carga: 0},
 *     {nombre:Jon,capacidad:1, carga: 5}
 *    ]
 *    Pero vemos que el problema ha escalado hacia arriba. Ahora es Itziar quien tiene menos carga que su superior, Carmen.
 *    Por tanto decrementamos la carga de carmen. Sin embargo, al hacerlo, la carga que tanto Jon como Itziar pueden llevar ha
 *    variado, así que tendríamos que volver a calcular todo desde Itziar. Es decir, hemos decrementado nuestro índice y vuelto
 *    a empezar pero modificando la precondición. Tenemos que repetir este proceso hasta tenerlo todo correctamente ajustado y
 *    satisfaciendo las condiciones requeridas.
*/

export default function howManyReindeers(reindeerTypes, gifts) {
  const prepareReindeers = (reindeerTypes, { country, weight }) => {
    /*
      Nuestra variable acumuladora para calcular qué peso están soportando los renos actualmente seleccionados. Crecerá y decrecerá
      en función de los ajustes que se hagan
    */
    let weightCapacityAcc = 0;
    /* 
      Inicializamos el array solución con todo los tipos de reno y un contador de carga para cada uno de ellos a 0. Al final
      de la función filtraremos por sólo aquellos renos que lleven carga.
    */
    const reindeerCount = reindeerTypes.map(({ type }) => ({ type, num: 0 }));
    /*
      Nuestro índice que irá iterando por el array de renos. Recuerda, no sólo crece, ya que también puede decrementarse para
      ajustar la solución. Este índice es compartido tanto por el array solución como por el array de tipos de reno, ya que son
      equivalentes.
    */
    let i = 0;
    while (i < reindeerTypes.length) {
      if (reindeerTypes[i].weightCapacity + weightCapacityAcc <= weight) {
        // Si el reno que actualmente estoy analizando podría cargar más peso, pero sin pasarme y que me sobre capacidad:
        weightCapacityAcc += reindeerTypes[i].weightCapacity; //Incremento peso acumulado
        reindeerCount[i].num++; //Incremento contador de dicho tipo de reno
      }
      else {
        /* 
          Si no, debo analizar si el reno actual está cargando menos peso que el siguiente reno de mayor capacidad. Si es así,
          tengo que reajustar mi solución, lo que implica que hasta quizás tenga que retroceder mi índice.
        */
        /*
           j es un nuevo índice decremental para reajustar la solución. Irá subiendo por la jerarquía de renos
           para comprobar que todo está OK.
         */
        let j = i - 1;
        let modified = false; //Variable para comprobar si tras el análisis se ha producido un reajuste o no.
        while (j >= 0) {
          if (reindeerCount[j].num > reindeerCount[j + 1].num) {
            reindeerCount[j].num--;
            weightCapacityAcc -= reindeerTypes[j].weightCapacity;
            modified = true;
            if (j < i - 1) i--;
            /*
              No estamos reajustando el reno inmediatamente superior al que apunta mi índice i, sino uno aún más superior, por lo
              que los renos intermedios deben ser recalculados.
            */
          }
          j--;
        }
        //Si no ha habido ningún ajuste, podemos continuar con el siguiente reno.
        if (!modified) i++;
      }
    }
    // Eliminamos de la solución los tipos de reno que no vayamos a utilizar.
    const filteredReindeers = reindeerCount.filter(({ num }) => num > 0)
    return { country, reindeers: filteredReindeers };
  };
  //El listado de tipos de renos debemos ordenarlo en función de su capacidad, para ir de mayor a menor.
  const sortedReindeerTypes = [...reindeerTypes]
    .sort((a, b) => b.weightCapacity - a.weightCapacity);
  return gifts
    .map(city => prepareReindeers(sortedReindeerTypes, city));
}