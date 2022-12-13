//Setting variables for html elements
let email_field=document.getElementById("email-field")
//A regular expression tha will act as template for checking emails
var regex=/^([a-zA-z0-9\._]+)@([a-zA-z0-9\._]+).([a-z]+)(.[a-z]+)?$/ 
let result=document.getElementById("result");
//   adding on click event listener on check button and the main logic begins  
    document.getElementById("check").addEventListener("click",()=>{if(regex.test(email_field.value))
    {    
    result.innerText="Valid Email";
    result.style.color="green";
    }
    else
    {
    result.innerText="Invalid email"
    result.style.color="red";
    }
})
