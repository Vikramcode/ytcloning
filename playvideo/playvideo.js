var container = document.querySelector(".container")
const siginimg = document.querySelector(".user-icon");
 const userimg = document.querySelector("#img-user");

(window.onload = function(){
    const token = localStorage.getItem("token");
    if(!token){
        //redirect to login page
        
        
    }else{
        //validate the token
        //... code to validate token
        userimg.style.display = "block";
        siginimg.style.display ="none";
        
    }
})()
