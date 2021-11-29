function addTwoNumber(number1, number2) {

    console.log(number2, number1);

    var total = number1 + number2;
    return total;
}

var result = addTwoNumber(21, 54);
console.log("the result is ", result)

// multilication
function multiplyTwoNumber(number1, number2) {
    var result = number1 * number2;
    return result;
}
var total = multiplyTwoNumber(12, 12)
console.log('multiple is ', total);


// divition

function divitionTwoNumber(num1, num2) {
    var result = num2 / num1;
    return result;

}
var divitionResult = divitionTwoNumber(12, 144)
console.log(divitionResult)


// minus
function minusTwoNumber(num1, num2) {
    var result = num2 - num1;
    return result;
}

var total = minusTwoNumber(2, 15);
console.log(total);