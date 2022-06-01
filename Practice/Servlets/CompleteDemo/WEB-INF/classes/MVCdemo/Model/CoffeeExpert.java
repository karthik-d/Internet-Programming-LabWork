package MVCdemo.Model;
import java.util.*;
public class CoffeeExpert
{
public List getBrands(String color)
{
List brands = new ArrayList();
if(color.equals("brown"))
{
brands.add("Nescafe");
brands.add("CostaCoffee");
}
else
{
brands.add("Bru Coffee");
brands.add("Leo Coffee");
}
return(brands);
}
}
