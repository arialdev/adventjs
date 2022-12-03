/**
 * Problem description:
    Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada
    de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

    Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa
    que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

    Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de
    los días festivos que caen en esos días.

    Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían
    ese año:

    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

    // 01/06 es el 6 de enero, jueves. Cuenta.
    // 04/01 es el 1 de abril, un viernes. Cuenta.
    // 12/25 es el 25 de diciembre, un domingo. No cuenta.

    countHours(year, holidays) // 2 días -> 4 horas extra en el año
    Cosas a tener en cuenta y consejos:

    El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
    Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
    El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.
*/

/**
 * 
 * Explicación:
 *  - El constructor de Date permite crear un objeto de tipo Date recibiendo un string en formato mes/día/año.
 *  - Como recibimos las vacaciones en formato mes/día, y también recibimos el año como parámetro, podemos construir
 *    las fechas en formato Date muy fácilmente. Para ello usamomos los String Templates.\
 *  - Una vez tenemos nuestro array de fechas, debemos quitar aquellas que caen en fin de semana.
 *    Para hacer tal cosa utilizamos el método Date.prototype.getDate, que devuelve el índice del día de la semana,
 *    pero en formato americano, es decir, 0 es domingo, 1 es lunes,... 6 es sábado.
 *    Para simplificarnos la vida nos viene mejor trabajar en el formato internacional, es decir, estableciendo el 
 *    lunes como primer día de la semana y al domingo como el último. Para ello sumamos 6 para "avanzar" 6 días y
 *    darle la vuelta a la semana, para finalmente hacer el módulo con los 7 días existentes en la semana.
 *    Por ejemplo, si estamos en domingo, día 0, nos saldría 6, y 6 módulo 7 es 6, que corresponde al último día de
 *    la semana (recuerda que trabajamos de 0 a 6). Si estuviésemos en jueves, día 4, al sumar 6 nos daría 10, pero al
 *    hacer el módulo nos daría 3 (cuarto día de la semana empezando desde 0).
 *  - Una vez aplicada esta operación, nos quedamos con aquellos días menores que 5, es decir, sábado, sexto día de la semana.
 *  - Por último, aplicamos un reduce donde simplemente sumamos 2 por cada elemento restante en el array.
 */
export default function countHours(year, holidays) {
  return holidays
    .map((holiday) => new Date(`${holiday}/${year}`))
    .filter((holiday) => (holiday.getDay() + 6) % 7 < 5)
    .reduce((acc) => acc + 2, 0);
}