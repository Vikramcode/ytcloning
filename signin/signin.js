// Email already exists
const btn = document.querySelector("#signinbtn");

 btn.addEventListener("click" , signinn);

async function signinn(){
    const emailphone = document.querySelector("#email-phone")
    const passwords = document.querySelector("#password")
   
    const data = {
        "email": `${emailphone.value}` ,
        "password": `${passwords.value}`
    };
    
    const response = await fetch("https://youtube-api-beta.vercel.app/user/login", 
    
    {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data)
    })
    const getdata = await response.json()

   console.log(getdata);
}

