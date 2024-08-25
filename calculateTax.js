// Function to calculate tax based on income ranges using closures
function calculateTax() {
    // Inner function to determine the tax rate based on income
    return function(income) {
        let taxRate;

        if (income <= 10000) {
            taxRate = 0.1;  // 10% tax rate for income <= 10,000
        } else if (income <= 50000) {
            taxRate = 0.2;  // 20% tax rate for income between 10,001 and 50,000
        } else if (income <= 100000) {
            taxRate = 0.3;  // 30% tax rate for income between 50,001 and 100,000
        } else {
            taxRate = 0.4;  // 40% tax rate for income above 100,000
        }

        return income * taxRate;
    };
}

// Create a tax calculator using the closure
const taxCalculator = calculateTax();

// Test the function with various incomes
const tax1 = taxCalculator(8000);    // Income: 8000
const tax2 = taxCalculator(30000);   // Income: 30000
const tax3 = taxCalculator(75000);   // Income: 75000
const tax4 = taxCalculator(150000);  // Income: 150000

// Display the calculated taxes
console.log(`Tax for $8000 income: $${tax1}`);       // Output: Tax for $8000 income: $800
console.log(`Tax for $30000 income: $${tax2}`);      // Output: Tax for $30000 income: $6000
console.log(`Tax for $75000 income: $${tax3}`);      // Output: Tax for $75000 income: $22500
console.log(`Tax for $150000 income: $${tax4}`);     // Output: Tax for $150000 income: $60000
