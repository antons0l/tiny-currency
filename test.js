const formatCurrency = require("./index");

console.log(formatCurrency(1200, "USD")); // "$1,200.00"
console.log(formatCurrency(1500, "EUR")); // "€1,500.00"
console.log(formatCurrency(2500, "GBP", "en-GB")); // "£2,500.00"
