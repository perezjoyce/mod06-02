// document.getElementById('btn').onclick = () =>  {
	// 1. Initialization / Declaration
	// let num;
	// num = 10 % 3;
	
	




// GUIDELINES IN USING DATATYPES
// STEP 1: Initialization & Declaration
//  let num;
//  num = 5;
//  *minimize variables for faster web responsiveness


// STEP 2: Specify Operator

// OPERATORS:
// a. Assignment Operator (=) - value on right is transferred to the other side;
// b. Arithmetic Operator 
// 	b.1. addition (+) adds operants -- THE MOST POWERFUL coz it can concatinate strings
// 	b.2. subtraction (-)
// 	b.3. division (/) 
// 	b.4. multiplication (*)
// 	b.5. modulo (%) same with division but is focused on  remainder


		// Arithmetic Operator's INCREMENT vs DECREMENT
		// INCREMENT simply add 1   ( ++n or n++ )
		// DECREMENT simply subtract 1   ( --n or n-- )

		// 	num = 5;
		// 	num--;

		// 	two ways to implement n++ or n--
		// 	1. prefix - place before variable ++num  --num
		// 		dagdag or minus muna before i-assign
		// 	2. postfix - place after variable num++ n--
		// 		assign muna before dagdag or minus

		// 	SHORTHAND METHDOD of arithmetic operation
		// 	num += 5; IS THE SAME AS num = num + 5;

		// 		let comment1 = "HEllo";
		// 		let comment2 = "World!";
		// 		let result = comment1 + ' ' + comment2;
		// 		alert(result);


		// 		document.getElementById('greeting').innerHTML += " World";

// c. Comparative Operator - always results to boolean (TRUE OR FALSE)
// 	= assignment
// 	== equals
// 	=== 
// 	>= greater than or equal
// 	<= less than or equal
// 	> greater than
// 	< less than
// 	! not

// 		num1 = 5;
// 		num2 = "5";
// 		num1 == num2; //true
// 		num1 === num2; // equals, datatype and value  hence false since diff datatype

// d. Logical Operator - goes hand in hand with comparative
// 	&& and -- all statements should be true so the result will be TRUE
// 	|| or -- one of the statements should be true to get a result of TRUE

		


// //STEP 3: DISPLAY
// console.log(num1);
// console.log(num2);

// }






// PLUS
document.getElementById('plus').onclick = () =>  {

	// datatype for variables a and b is string because of the above declaration
	let a = document.getElementById('set1').value; 
	let b = document.getElementById('set2').value;

	// convert datatype for variables a and b from string to integer
	// note that num1 and num2 here are variables as well
	let num1 = parseInt(a);
	let num2 = parseInt(b);
	// or let num1 = Number(a);
	// or let num2 = Number (b);


	// determine operation or what to do with above variables using another variable
	// note that the key variable here is result
	let result = num1 + num2;
	document.getElementById('total').innerHTML = result;

	
}

//MINUS 
document.getElementById('minus').onclick = () =>  {

	let a = document.getElementById('set1').value; 
	let b = document.getElementById('set2').value;


	let num1 = parseInt(a);
	let num2 = parseInt(b);
	
	let result = num1 - num2;
	document.getElementById('total').innerHTML = result;

	
}

// MULTIPLICATION
document.getElementById('multiply').onclick = () =>  {

	let a = document.getElementById('set1').value; 
	let b = document.getElementById('set2').value;


	let num1 = parseInt(a);
	let num2 = parseInt(b);
	
	let result = num1 * num2;
	document.getElementById('total').innerHTML = result;

}


// DIVISION
document.getElementById('divide').onclick = () =>  {

	let a = document.getElementById('set1').value; 
	let b = document.getElementById('set2').value;


	let num1 = parseInt(a);
	let num2 = parseInt(b);
	
	let result = num1 / num2;
	document.getElementById('total').innerHTML = result;

}

// MODULO
document.getElementById('modulo').onclick = () =>  {

	let a = document.getElementById('set1').value; 
	let b = document.getElementById('set2').value;


	let num1 = parseInt(a);
	let num2 = parseInt(b);
	
	let result = num1 % num2;
	document.getElementById('total').innerHTML = result;

}

// CLEAR
document.getElementById('clear').onclick = () =>  {
	document.getElementById('total').style.display = "none";

	document.getElementById('set1').value = " ";
	document.getElementById('set2').value = " ";
}

