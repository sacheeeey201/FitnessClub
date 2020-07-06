package string;

import java.util.Scanner;

public class RevNumber {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		System.out.println("ENter a number : ");
		int num=s.nextInt();
		int rev=0;
		while(num!=0)
		{
			int digit=num % 10;
			rev=rev * 10 + digit;
			num /= 10;
		}
		System.out.println("Reversed number is : "+rev);
	}

}
