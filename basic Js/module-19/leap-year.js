function leapYearChecky(year) {
    if (year % 4 == 0) {
        return true
    }
    return false;
}

const myYear = 2028;

var func = leapYearChecky(myYear)

console.log("is my Year is leap year", func)