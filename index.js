// Write your solution in this file!
var customerName = ('bob')

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()//had inside repl, but needed to empty parameter of function
    //window.customerName.toUpperCase('bob')
   // customerName.toUpperCase() // TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    //customerName.toUpperCase('bob')
    //customerName = [BOB]
    //customerName = ['BOB']//Assertion error
   // customerName = 'BOB'
    //  AssertionError: expected 'bob' to equal 'BOB'
    // + expected - actual

    // -bob
    // +BOB

} 


function setBestCustomer(){
   bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = ('sam')
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = ('jon snow')
 }