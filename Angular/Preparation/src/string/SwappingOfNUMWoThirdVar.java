package string;

import java.util.Scanner;

public class SwappingOfNUMWoThirdVar {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter numbers ");
		int a=sc.nextInt();
		int b=sc.nextInt();
		
		a=a+b;//30
		b=a-b;//30-20==10
		a=a-b;//30-10==20
		
		System.out.println("Swapped "+a+" "+b);

	}

}
