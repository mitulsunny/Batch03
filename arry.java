


public class Aarrylist {
	public static void main(String[] args) {
		
		ArrayList<Object> a=new ArrayList<Object>();
		ArrayList<String> b=new ArrayList<String>();
		//ArryList,LinkList,Vector- Implementing List interface
	a.add(10);
	a.add(89);
	a.add(89);
	a.add("Hi");
	a.add(1, 100);
	b.add("Sayeedin");
	b.add("Gazipur");
	//b.remove("Gazipur");
	//a.remove(0);
	System.out.println(a.get(1));
	System.out.println(a.contains(89));
	System.out.println(a.hashCode());
	System.out.println(a);
	System.out.println(b);
	System.out.println(a.indexOf(89));
	System.out.println(a.size());
	}

}
