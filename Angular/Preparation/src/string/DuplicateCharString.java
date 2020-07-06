package string;

import java.util.Scanner;

public class DuplicateCharString {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the string : ");
		String str=sc.next(); 
		char cstr[]=str.toCharArray();
		
		for(int i=0;i<str.length();i++)
		{
			for(int j=i+1;j<str.length();j++)
			{
				if(cstr[i] == cstr[j])
				{
					System.out.println("duplicates are: "+cstr[j]);
					//System.out.println("duplicates if i  are: "+cstr[i]);
				}
				
			}
		}
		
	}

}
