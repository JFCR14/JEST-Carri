
let oneEuroIs = {
    "JPY": 156.5, // 1 EUR = 156.5 JPY
    "USD": 1.07,  // 1 EUR = 1.07 USD
    "GBP": 0.87   // 1 EUR = 0.87 GBP
};


function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}


function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD; 
    return euros * oneEuroIs.JPY; 
}


function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY; // Convertir de JPY a EUR
    return euros * oneEuroIs.GBP; // Convertir de EUR a GBP
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
