/*
"""
Created on Fri May 04 17:45:07 2018

@author: Jacklin

"""
*/

/*
Question 3

Write a function that takes an array of integers as input. For each integer, output the next
fibonacci number. Solution that work both cpu and memory efficient are appreciated.
Fibonacci number of Fn is defined by:
Fn = Fn-1 + Fn-2
F1 = 1, F2 = 1

For example:
nextFibonacci([1,9,22])

Output:
2
13
34

Explanation: 2 is the next fibonacci number great than 1. The fibonacci number after 9 is 13,
and after 22 is 34.

*/
/*
Using a loop, could store the values in an array that could stop immediately one key after finding the selected number in the previous keys value.
*/

'use strict';
function getFibonacci(n) {
   if(isFinite(n) == false){
	   return 0; // n is Infinity type so cannot return value 
   }else{
	   var fib = [];       
	   fib[0] = 0; fib[1] = 1; // set initial array keys
	   

	   for (var i=2; i<=n+1; i++) {
			fib[i] = fib[i-1]+fib[i-2];
			if (fib[i] > n) { // check if key > num 
				return fib[i];
			}
	   }
	   if (fib[i-1] < n) {   // check if key < num
			return fib[i-1] + n;
	   }
	   if (fib[i] = n-1) {   // check if key = num
		   return fib[i-1] + fib[i-2];
	   } 
	   if (fib[i-1] = 1) {    // check if num = 1
		   return n + n;
	   }
   }
   
}

function nextFibonacci(arr){
	var uniqueArray = arr.filter(function(item, pos) { // Remove duplicate values
		return arr.indexOf(item) == pos;
	});
	for (let i = 0; i < uniqueArray.length; i++){
		let num = uniqueArray[i];
		console.log(getFibonacci(num));
		//console.log( "next fibonacci number = " + getFibonacci(num));
	}
}
nextFibonacci([1,9,22]);


