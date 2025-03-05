// Declare customerName in global scope
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
// Declare bestCustomer in global scope
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwritesBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new person';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
