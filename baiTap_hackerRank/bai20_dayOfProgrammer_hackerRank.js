function dayOfProgrammer(year) {
    // Write your code here
    let noLeapYear = 244;
    let leapYear = 243;
    if (year % 4 === 0 && year % 100 !== 0) {
        let day = 256 - noLeapYear;
        return `${day}.09.${year}`;
    } else if (year >= 1700 && year < 1917) {
        let day = 256 - noLeapYear;
        return `${day}.09.${year}`;
    } else {
        let day = 256 - leapYear;
        return `${day}.09.${year}`;
    }

}

dayOfProgrammer(2017)
dayOfProgrammer(2016)
dayOfProgrammer(1800)

