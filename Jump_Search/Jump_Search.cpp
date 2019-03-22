// Cpp program to implement Jump Search 
#include <bits/stdc++.h> 
using namespace std; 

int jumpSearch(int arr[], int element, int number_of_element) 
{ 
	// Finding block size to be jumped 
	int step = sqrt(number_of_element); 

	// Finding the block where element is 
	// present (if it is present) 
	int prev = 0; 
	while (arr[min(step, number_of_element)-1] < x) 
	{ 
		prev = step; 
		step += sqrt(number_of_element); 
		if (prev >= number_of_element) 
			return -1; 
	} 

	// Doing a linear search for element in block 
	// beginning with prev. 
	while (arr[prev] < element) 
	{ 
		prev++; 

		// If we reached next block or end of 
		// array, element is not present. 
		if (prev == min(step, number_of_element)) 
			return -1; 
	} 
	// If element is found 
	if (arr[prev] == element) 
		return prev; 

	return -1; 
} 

// The main function
int main() 
{ 
	int arr[] = { 0, 1, 1, 2, 3, 5, 8, 13, 21, 
				34, 55, 89, 144 }; 
	int element = 55; 
	int number_of_eleemnt = sizeof(arr) / sizeof(arr[0]); 

	// Find the index of 'element' using Jump Search 
	int index = jumpSearch(arr, element, number_of_eleemnt); 

	// Print the index where 'element' is located 
	cout << "\nNumber " << element << " is at index " << index; 
	return 0; 
} 

//OUTPUT => Number 55 is at index 10
//Time Complexity : O(√n)


