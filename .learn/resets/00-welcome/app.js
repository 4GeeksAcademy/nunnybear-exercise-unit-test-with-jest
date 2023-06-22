// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueinYen){
    let valueinDollar = valueinYen * 127.9;
    return valueinDollar
}
module.exports = {fromEuroToDollar};
module.exports = {fromDollarToYen};