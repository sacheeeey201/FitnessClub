package string;

public class RevString {
	public static void main(String[] args) 
	{
		String s="Tony Stark";
		String revs="";
		
		for(int i=s.length()-1;i>=0;--i) 
		{
			//System.out.println(s.charAt(i));
			revs += s.charAt(i);
		}
		System.out.println(s.toLowerCase());
		System.out.println("Reverse is: "+revs.toLowerCase());
	}
}
