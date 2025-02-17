// app.js

// Función para sumar dos números
const sum = (a, b) => {
    return a + b;
};

console.log(sum(7, 3)); // Para probar en consola

// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // 1 EUR = 156.5 JPY
    "USD": 1.07,  // 1 EUR = 1.07 USD
    "GBP": 0.87   // 1 EUR = 0.87 GBP
};

// Función para convertir de euros a dólares
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD; // Convertimos USD a EUR
    return euros * oneEuroIs.JPY; // Convertimos EUR a JPY
}

// Función para convertir de yenes a libras esterlinas
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY; // Convertimos JPY a EUR
    return euros * oneEuroIs.GBP; // Convertimos EUR a GBP
}

// Exportar todas las funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
