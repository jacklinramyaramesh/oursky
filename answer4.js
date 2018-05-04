/*
"""
Created on Fri May 04 17:53:47 2018

@author: Jacklin

"""
*/

/*

Question 4

Please explain what is the bug in the following Javascript function, and how to correct it.

function createArrayOfFunctions(y) {
  var arr = [];
  for(var i = 0; i<y; i++) {
    arr[i] = function(x) { return x + i; }
  }
  return arr;
}

*/

'use strict';
function createArrayOfFunctions(y) {
  var arr = [];
  for(let i = 0; i<y; i++) {// Changed var to let
    arr[i] = function(x) {
		console.log(i)
		return x + i; 
	}
  }
	return arr;
}

/*
In this bug, I have changed var to let. 
	* 'let' variables cannot be redeclared, 'var' variable can be redeclared in the same scope.
	
	So before the arrayoffunction value will return same value.
	After changed the 'let' variable it will return the corresponding value.
	
	* let variable are used when there is a limited use of variables. Liek for loops, while loope or if conditions.
	
	 
*/