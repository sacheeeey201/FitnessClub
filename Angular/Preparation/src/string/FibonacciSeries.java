package string;

import java.util.Scanner;

class FibonacciSeries {
	static int n1=0,n2=1,n3;
	static void fibbo(int cnt)
	{
		if(cnt>0)
		{
			n3=n1+n2;
			n1=n2;
			n2=n3;
			System.out.print(" "+n3);
			fibbo(cnt-1);
		}
	}
	public static void main(String[] args) 
	{
	 Scanner sc=new Scanner(System.in);
	 System.out.println("ENter size of series you want:	");
	 int cnt=sc.nextInt();
	 System.out.print(n1+" "+n2);
	 fibbo(cnt-2);
	}

}