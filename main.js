var price=[300,200,347,789,675,123,1524,908];
var maxvalue;
maxvalue=price[0];
for(i=0;i<price.length;i++)
{
    if(price[i]>maxvalue)
    {
        maxvalue=price[i];
    }
}
document.write("Maximum Value : "+maxvalue);