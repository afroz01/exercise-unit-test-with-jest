// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
module.exports = { fromEuroToDollar }


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
function euroToUsd(euro) {
    if  ( euro < 0) {
        console.log("You can't have negative value")
        return
    }
    return euro*1.2


}
console.log(euroToUsd(1))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, euroToUsd };






// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
|function fromDollartoYen(dollar) {
let rate = dollar * oneEuroIs["USD"]
return yen
}
function fromYentoPound(yen){
    let rate = yen*oneEuroIs["GBP"]
    return pound
}
