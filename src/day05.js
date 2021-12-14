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

export default function daysToXmas(date) {
    return Math.ceil((new Date('Dec 25, 2021') - date) / (1000 * 3600 * 24));
}