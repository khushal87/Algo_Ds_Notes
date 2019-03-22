// JavaScript program to implement Jump Search 
function jumpSearch(arr,element,number_of_elements) 
{ 
	// Finding block size to be jumped 
	var step = Math.sqrt(number_of_elements); 

	// Finding the block where element is 
	// present (if it is present) 
	var prev = 0; 
	while (arr[Math.min(step, number_of_elements)-1] < element) 
	{ 
		prev = step; 
		step += Math.sqrt(number_of_elements); 
		if (prev >= number_of_elements) 
			return -1; 
	} 

	// Doing a linear search for element in block 
	// beginning with prev. 
	while (arr[prev] < element) 
	{ 
		prev++; 

		// If we reached next block or end of 
		// array, element is not present. 
		if (prev == Math.min(step, number_of_elements)) 
			return -1; 
	} 
	// If element is found 
	if (arr[prev] == element) 
		return prev; 

	return -1; 
} 

//The main function
function main() 
{ 
	var arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 
				34, 55, 89, 144 ]; 
	var element = 55; 
	var number_of_elements= arr.length;
	
	// Find the index of 'element' using Jump Search 
	var index = jumpSearch(arr, element, number_of_elements); 

	// Print the index where 'element' is located 
	console.log("Number " + element +" is at index " + index);
} 
main();

//OUTPUT => Number 55 is at index 10
//Time Complexity : O(√n)



