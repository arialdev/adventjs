/**
 * Problem description:
 Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

 Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

 Veamos unos ejemplos:

 const date1 = new Date('Dec 1, 2021')
 daysToXmas(date1) // 24
 const date2 = new Date('Dec 24, 2021 00:00:01')
 daysToXmas(date2) // 1
 const date3 = new Date('Dec 24, 2021 23:59:59')
 daysToXmas(date3) // 1
 const date4 = new Date("December 20, 2021 03:24:00")
 daysToXmas(date4) // 5
 El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende
 que todavía falta un día.

 ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura
 (devolveríamos el número de días en negativo -):

 const date = new Date('Dec 25, 2021')
 daysToXmas(date) // 0
 const date1 = new Date('Dec 26, 2021')
 daysToXmas(date1) // -1
 const date2 = new Date('Dec 31, 2021')
 daysToXmas(date2) // -6
 const date3 = new Date('Jan 1, 2022 00:00:01')
 daysToXmas(date3) // -7
 const date4 = new Date('Jan 1, 2022 23:59:59')
 daysToXmas(date4) // -7
 Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021.
 */

/**
 * Title: Going through the calendar adding and subtracting days.
 * Comment:
 * This is the solution developed before realising about the second one, which I think it's a better one.
 * 1. First we add or subtract 365, or 366 if it is leap, to out day's counter for every iterated year until we get our
 *      desired year 2021.
 * 2. Now we do the same with the months, adding or subtracting 28,30 or 31 depending on the iterated month until we get
 *      to December.
 * 3. Finally we only have to add to the counter the subtraction between 25 (Christmas day) and the date's day.
 */
// export default function daysToXmas(date) {
//
//     function isLeap(year) {
//         return year % 4 == 0 || (year % 100 == 0 && year % 400 == 0);
//     }
//
//     function getMonthDays(month, leap = false) {
//         if (month === 1) return leap ? 29 : 28;
//         if (
//             month === 0 ||
//             month === 2 ||
//             month === 4 ||
//             month === 6 ||
//             month === 7 ||
//             month === 9 ||
//             month === 11
//         )
//             return 31;
//         return 30;
//     }
//
//     let count = 0;
//     const [month, day, year] = [
//         date.getMonth(),
//         date.getDate(),
//         date.getFullYear(),
//     ];
//
//     if (year > 2021) {
//         for (let i = 2021; i < year; i++) count -= isLeap(i) ? 366 : 365;
//     } else if (year < 2021) {
//         for (let i = year; i < 2021; i++) count += isLeap(i) ? 366 : 365;
//     }
//
//     for (let i = month; i < 11; i++) count += getMonthDays(i);
//
//     return count + (25 - day);
// }

/**
 * Title: Subtracting both dates and get the elapsed days via mathematical operations and ceiling.
 * Comment:
 * 1. I didn't like this solution because I thought it would be incorrect if there would be leap years, but later I
 *      realised that the date subtraction would consider that.
 * 2. There was another problem, I thought, as in the case of passing the 24 Dec 2021 23h, only an hour before Christmas,
 *      I thought the program would return 0 days, but Math.ceil help us with this.
 */
export default function daysToXmas(date) {
    return Math.ceil((new Date('Dec 25, 2021') - date) / (1000 * 3600 * 24));
}