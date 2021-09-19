var display = document.getElementById("display");
var s="";
var btn;
buttonArray=document.querySelectorAll("button");
buttonArray.forEach(x => {
    x.addEventListener("click",()=>{
        btn=x.innerText;
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
           btn='*0.01';
           s=s+btn;
           display.value=s;
       }
       else if(btn=="CE")
       {
           s=s.substr(0,s.length-1);
           display.value=s;
       }
       else if(btn=="AC")
       {
           s="";
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
   
    
});
