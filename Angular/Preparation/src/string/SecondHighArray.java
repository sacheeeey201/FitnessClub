package string;

public class SecondHighArray {
	
	public static void main(String[] args) {
		int arr[]= {1,5,3,8,7,0,2,9};
		int temp=0;
		for(int i=0;i<arr.length;i++)
		{
			for(int j=i+1;j<arr.length;j++)
			{
				if(arr[i]>arr[j])
				{
				temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
				}
			}
		}
		for(int i=0;i<arr.length;i++)
		{
			System.out.print(" "+arr[i]);
		}
		System.out.println("\nSecond highest element of array is : "+arr[(arr.length)-2]);
		System.out.println("Highest element of array is : "+arr[(arr.length)-1]);	
		System.out.println("Mid element of array is : "+arr[(arr.length)/2]);	
		System.out.println("Second lowest element of array is : "+arr[1]);
		System.out.println("lowest element of array is : "+arr[0]);		
	}

}