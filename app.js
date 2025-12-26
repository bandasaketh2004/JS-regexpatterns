//regex patterns
let namepattern = /^[A-Z][a-z]{3,8}$/;
let passwordpattern = /^[A-Z][a-z!@#%&*]{3,8}[0-9]{2,}$/;
let mobilepattern = /^[6-9][0-9]{9}$/;
let aadharpattern = /^[0-9]{4} [0-9]{4} [0-9]{4}$/;
let pancardpattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
let emailpattern = /^[A-Za-z0-9]{8,12}@[A-Za-z]{5}\.[A-Za-z]{2,}$/;


let erroru=document.getElementById('erroru');
let errorp=document.getElementById('errorp');
let errorm=document.getElementById('errorm');
let errora=document.getElementById('errora');
let errorpc=document.getElementById('errorpc');
let errorem=document.getElementById('errorem');

function validation(){
    let username=document.getElementById('username').value;
    let password =document.getElementById('password').value;
    let mobile =document.getElementById('mobile').value;
    let aadhaar =document.getElementById('aadhaar').value;
    let pancard =document.getElementById('pancard').value;
    let email =document.getElementById('email').value;
    
    let isvalid=true;
    //username
    if(!namepattern.test(username)){
         erroru.innerText="please enter valid username";
         erroru.style.color="red";
         isvalid=false;
    }
    else{
        erroru.innerText= "";
    }
    
    //password
    if(!passwordpattern.test(password)){
         errorp.innerText="please enter valid password";
         errorp.style.color="red";
         isvalid=false;
    }
    else{
        errorp.innerText= "";
    }
    
    //mobile
    if(!mobilepattern.test(mobile)){
         errorm.innerText="please enter valid number";
         errorm.style.color="red";
         isvalid=false;
    }
    else{
        errorm.innerText= "";
    }
    
    //aadhar
    if(!aadharpattern.test(aadhaar)){
         errora.innerText="please enter valid aadhar number";
         errora.style.color="red";
         isvalid=false;
    }
    else{
        errora.innerText= "";
    }

    //pancard
    if(!pancardpattern.test(pancard)){
         errorpc.innerText="please enter valid pancard";
         errorpc.style.color="red";
         isvalid=false;
    }
    else{
        errorpc.innerText= "";
    }

    //email
    if(!emailpattern.test(email)){
         errorem.innerText="please enter valid email";
         errorem.style.color="red";
         isvalid=false;
    }
    else{
        errorem.innerText= "";
    }


    if(isvalid){
        alert("successful")
    }
    return isvalid;
}