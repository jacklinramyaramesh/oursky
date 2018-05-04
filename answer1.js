/*
"""
Created on Fri May 04 17:40:41 2018

@author: Jacklin

"""
*/

/*

Question 1

Write a function that takes two arrays as input, each array contains a list of A-Z; Your program
should return True if the 2nd array is a subset of 1st array, or False if not.
For example:
isSubset([A,B,C,D,E], [A,E,D]) = true
isSubset([A,B,C,D,E], [A,D,Z]) = false
isSubset([A,D,E], [A,A,D,E]) = true

*/

/*
Programming Language Javascript(ES5)
*/

'use strict';
function isSubset(Arr1, Arr2){
	return Arr2.every(function(val) { return Arr1.indexOf(val) >= 0; });// checks if all elements in an array pass a function(like for each)
}

var first_Array = ["A","D","E"];
var second_Array_Children = ["A","A","D","E"];

 

console.log(isSubset(first_Array, second_Array_Children));