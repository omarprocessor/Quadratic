fv

document.getElementById("submit").onclick = function(){
    let x1;
    let x2;
    
    try {
  
    let a= document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let z = Math.sqrt((b*b)-(4*a*c));
    let x1 = (((-b)-(z))/(2*a));
    let x2 =((-b)+(z))/(2*a);
  
    if(a== "" ||b==""||c=="")throw document.getElementById("result").innerHTML = "Please enter a value";
  
    if(isNaN(z)) throw document.getElementById("result").innerHTML= "The equation doesnot obey quad formula";
    
   if (!isNaN(z)) throw document.getElementById("result").innerHTML= `X is :${x1} or :${x2}`;
    
  }
catch(error){
    console.log(error);
  }
finally{
     document.getElementById("again").onclick = function(){
      document.getElementById("result").innerHTML = ``
      document.getElementById("a").value = null;
      document.getElementById("b").value = null;
      document.getElementById("c").value = null;
     }
    } 
  }
