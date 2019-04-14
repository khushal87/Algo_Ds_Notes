// Java program to convert a decimal number to binary number 
import java.io.*; 

class  Decimal_To_Binary
{ 
    // Function to convert decimal to binary 
    static void decimalToBinary(int number) 
    { 
        // array to store binary number 
        int[] binaryNumber = new int[1000]; 
        // counter for binary array 
        int i = 0; 
        while (number > 0) 
        { 
            // storing remainder in binary array 
            binaryNumber[i] = number % 2; 
            number = number / 2; 
            i++; 
        } 

        // print binary array in reverse order 
        for (int j = i - 1; j >= 0; j--) 
            System.out.print(binaryNumber[j]); 
    } 

    //The main Function 
    public static void main (String[] args) 
    { 
        int num = 29; 
        decimalToBinary(num); 
    } 
}

//OUTPUT
//11101