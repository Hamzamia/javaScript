/// even number check 
function chechEvenNumber(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const number = 1244;
var func = chechEvenNumber(number);
console.log("is enter number is even", func)


const herNumber = 124857;
var func = chechEvenNumber(herNumber);
console.log("is her number is even", func)





//odd numbeer check

function oddNumberCheck(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const num = 121;
var func = oddNumberCheck(num);
console.log("is the number is odd", func)