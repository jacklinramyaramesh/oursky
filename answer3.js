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

'use strict';
function nextFibonacci(arr){
	var resultArr = [];
	for(var i = 0; i < arr.length; i++){
		var num = arr[i]
		var a = 1, b = 0, temp;
		var initialval = num;
		if( num == 0) return 1;
		while (num >= 0){
			temp = a;
			a = a + b;
			b = temp;
			num--;
			num = (b == initialval) ? 0 : num
			if(b > initialval){
				break;
			}
		}

		resultArr.push(b);
	}
    return resultArr
}

console.log(nextFibonacci([1,9,22]))

/*
	In this fibonacci function I have used while loop for getting the value of fibonacci.
	Because while is very fast, so time needed is very less compare than recursive function.
	While loop cannot use much of memory allocation, because one time only is added the variables. But in recursive function always set memory for variables.
	
*/