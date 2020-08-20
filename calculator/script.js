var display = document.getElementById("display");
var s="";
var btn;
buttonArray=document.querySelectorAll("button");
for(x of buttonArray)
{
    x.addEventListener("click",(z)=>{
         btn=z.target.innerText;
        if(btn=='c')
        {
            s="";
            display.value=s;
        }
        else if(btn=='X')
        {
           btn='*';
            s=s+btn;
            display.value=s;
        }
        else if(btn=='%')
        {
            btn='*0.001';
            s=s+btn;
            display.value=s;
        }
        // else if(btn==char(8730))
        // {
        //     btntext='Math.Sqrt(';
        //     s=s+btn;
        //     display.value=s;
        // }
        else if(btn=='=')
        {
            display.value=eval(s);
        }
        else{
            s=s+btn;
            display.value=s;
        }
    });
}