# Python3 code for Jump Search 
import math 

def jumpSearch( arr , element , number_of_elements ): 
	
	# Finding block size to be jumped 
	step = math.sqrt(number_of_elements) 
	
	# Finding the block where element is 
	# present (if it is present) 
	prev = 0
	while arr[int(min(step, number_of_elements)-1)] < element: 
		prev = step 
		step += math.sqrt(number_of_elements) 
		if prev >= number_of_elements: 
			return -1
	
	# Doing a linear search for element in 
	# block beginning with prev. 
	while arr[int(prev)] < element: 
		prev += 1
		
		# If we reached next block or end 
		# of array, element is not present. 
		if prev == min(step, number_of_elements): 
			return -1
	
	# If element is found 
	if arr[int(prev)] == element: 
		return prev 
	
	return -1
 
arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 
	34, 55, 89, 144 ] 
element = 55
number_of_elements = len(arr) 

# Find the index of 'element' using Jump Search 
index = jumpSearch(arr, element, number_of_elements) 

# Print the index where 'element' is located 
print("Number" , element, "is at index" ,"%.0f"%index) 


#OUTPUT => Number 55 is at index 10
#Time Complexity : O(√n)

