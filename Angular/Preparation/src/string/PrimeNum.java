package string;

import java.util.Scanner;

public class PrimeNum {

	public static void main(String[] args) {
		Scanner sc =new Scanner(System.in);
		boolean flag=false;
		System.out.println("Enter num");
		int num=sc.nextInt();
		if(num==1 || num ==0)
		{
			System.out.println(num+" is not a prime number");
		}
		else {
		for(int i=2;i<num;++i)
		{
			if(num%i ==0)
			{
				flag=true;
			}
			
		}
		if(flag==false)
		{
			System.out.println(num+" is a prime number");
		}
		else
		{
			System.out.println(num+"is not a prime number");
		}
	}
	}
}
