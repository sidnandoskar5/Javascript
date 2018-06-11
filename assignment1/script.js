/* Question 1 */
var carName = "Honda City";
printData(carName, "a1");
/* ------- */ 

/* Question 2 */
var number = 150;
printData(number, "a2");
/* ------- */ 

/* Question 3 */
var x = 5, y = 10;
printData(x+y, "a3");
/* ------- */ 

/* Question 4 */
var z = x+y;
printData(z, "a4");
/* ------- */ 

/* Question 5 */
var firstName = "John", lastName = "Doe", age = 35;
var sentence = firstName + " " + lastName + " is " + 35 + " years old.";
printData(sentence, "a5");
/* ------- */ 

/* Question 6 */
function getDate(){
	let date = prompt("Enter your name Date of birth (MM/DD/YYYY)");
	if(validateDate(date)){
		const DOB = calculateAge(date);
		printData("Your age is " + DOB + " years.", "a6");
	}else{
		alert("Enter your name Date of birth in \"MM/DD/YYYY\" format");
		getDate();
	}
}

function validateDate(date){
	var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
	return date_regex.test(date);
}

function calculateAge(date){
	let dob = new Date(date);
	let age = new Date(Date.now() - dob.getTime()); 
    return Math.abs(age.getUTCFullYear() - 1970);
}
/* ------- */

/* Question 7 */	
var something = "Hello, I'm assigned to \"DIV\" element.";
printData(something, "a7");
/*--------*/

function printData(ans, selector){document.getElementById(selector).innerHTML = ans;}