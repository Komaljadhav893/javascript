const accountId =890
let accountEmail="xyz2599@gmail.com"
var accountPassword='9087'
acountCity='belgavi'
let acountState;// in output is come undefined


//const-value cant be change
// accountId=9 not allowed
// console.log(accountId); // after running : TypeError: Assignment to constant variable.
console.log(accountId);
accountEmail="kj2003@gmail.com"
accountPassword="893003"
acountCity="mumbai"
 console.table([accountEmail,accountPassword,acountCity,acountState])  //output wil come in table form
/*
 prefer not to use var 
 because of issues in block scope and functional scope
*/