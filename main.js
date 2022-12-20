var price=[300,200,347,789,675,123,1524,9078];
var maxvalue;
maxvalue=price[0];
function main(getcalback)
{
    for(i=0;i<price.length;i++)
    {
        if(price[i]>maxvalue)
        {
            maxvalue=price[i];
        }
    }
    getcalback();
}
function callBack(){
    document.write("Maximum Value : "+maxvalue);
}
main(callBack);