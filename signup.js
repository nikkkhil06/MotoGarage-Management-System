const signupform=document.querySelector("#signupform");
signupform.addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.querySelector("#username").value;
    const email=document.querySelector("#email").value;
    const user={
        name:username,
        email:email
    }
    localStorage.setItem("user",JSON.stringify(user));
    console.log("user saved");
    console.log(localStorage.getItem("user"));
    window.location.href='account.html';
});
console.log(signupform);