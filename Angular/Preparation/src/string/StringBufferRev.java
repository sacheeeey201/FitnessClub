package string;

public class StringBufferRev {

	public static void main(String[] args) 
	{
		String string="Hiebeb";
		StringBuffer buffer = new StringBuffer(string);
		String reverse = buffer.reverse().toString();
		System.out.println("Reverse String: " +reverse);
		//System.out.print(“Reverse String: “+reverse);

	}

}
