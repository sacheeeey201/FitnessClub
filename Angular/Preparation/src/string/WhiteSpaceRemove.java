package string;

public class WhiteSpaceRemove {

	public static void main(String[] args)
	{
		String s="   Tony    Stark    ";
		String w="";
		System.out.println(s.charAt(5));
		System.out.println(s.length());
		for(int i=0;i<s.length();i++)
		{
			//System.out.println(s.charAt(i));
			if((s.charAt(i)!=' ') && (s.charAt(i)!='\t'))
			{ 
				w += s.charAt(i); 
				//System.out.println(s.charAt(i));
			}
			//System.out.println("w is : "+w);	
		}
		System.out.println("w is : "+w);
	}

}
