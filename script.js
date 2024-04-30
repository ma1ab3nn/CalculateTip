/*alert("Hello")
prompt("prompt")
console.log("console")
document.write("document write")*/

let total = prompt("What is the bill total");
let total_two_dec_places = Number(total).toFixed(2);
console.log("Bill total "+total_two_dec_places);

let tip = prompt("How much would you like to tip - as a %");
console.log("You would like to add a tip of "+tip+"%");

let tip_amount = Number(tip / 100) * Number(total_two_dec_places);
console.log("Tip amount "+tip_amount);

let totalwithtip = Number(total_two_dec_places) + Number(tip_amount);
console.log("Total with Tip "+totalwithtip);

let tip_two_dec_places_two_dec_places = Number(totalwithtip).toFixed(2);
console.log("Total with tip to 2 decimal places "+tip_two_dec_places_two_dec_places);

/*let name; //declared a variable
console.log(name); //Displaying the name variable value
name = "James"; //initialise the value to the variable
console.log(name); //Displaying the name variable value

//some value that in unchangeable
const orgName = "The coders Guild"
console.log(orgName); //Displaying the name variable value

let age = 21; //declared a variable
console.log(age); //Displaying the name variable value
age = 23; //initialise the value to the variable
console.log(orgName, age); //Displaying the name variable value

const a = "5";
const b = "4";
const answer = a + b;
//Using + as concatenation operator to combine a text with a variable
console.log("The result of a and b is: " + answer + "" + " using JS Arithmetic operators");
//Template Literals
console.log(`The result of a and b is ${answer} and its by using arithmetic operators. Learned at  ${orgName} `);
document.write(`The result of a and b is ${answer} and its by using arithmetic operators. Learned at  ${orgName} `);*/
