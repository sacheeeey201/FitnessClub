package string;

public class SwappingOfNumbers {

	public static void main(String[] args) 
	{
		int num1=10;
		int num2=20;
		int temp=0;
		System.out.println("Current value of num1 is "+num1);
		System.out.println("Current value of num2 is "+num2);
		
		temp=num1;
		num1=num2;
		num2=temp;
		
		System.out.println("Swapped value of num1 is "+num1);
		System.out.println("Swapped value of num2 is "+num2);
	}

}
