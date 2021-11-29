function bringSingara(taka) {
    console.log("singara er jonno tk dise", taka);
    console.log("mama singara den");
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);

console.log(singara, "ta singara apni paben");