package string;

import java.util.Scanner;

public class Armstrong {

	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		System.out.println("Enter a number");
		int num=s.nextInt();
		int number=num;
		int count=0;
		
		while(num != 0)
		{
			num /= 10;
			count++;
		}
		
		int remainder,result=0;
		int orignalNumber=number;
		
		while(orignalNumber !=0 )
		{
			remainder = orignalNumber%10;
			result += Math.pow(remainder, count);
			orignalNumber /=10;
		}
		if(result==number)//1234 == 1^4 + 2^4 + 3^4 + 4^4 ==1234
			System.out.println(number+" is Armstrong");

		else
			System.out.println(number+" Not Armstrong number");
		
	}

}
