var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container")
const siginimg = document.querySelector(".user-icon");
 const userimg = document.querySelector("#img-user");

menuIcon.addEventListener("click" , function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
})


window.onload = function(){
    const token = localStorage.getItem("token");
    if(!token){
        //redirect to login page
        
        
    }else{
        //validate the token
        //... code to validate token
        userimg.style.display = "block";
        siginimg.style.display ="none";
        
    }
}



// ..................upload video API WORK............

async function uploadvideoAPI(){
    const data = {
    "video_url": "https://www.example.com/video.mp4",
    "description": "This is 3nd video"
}

    const responseUVapi = await fetch("https://youtube-api-beta.vercel.app/video/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(data)
});
const post_data = await responseUVapi.json();
console.log(post_data);
}





// ..................provideuniqueuserid + storeuserid in local storage................


function generateUserID() {
    // generate a random 16-digit hexadecimal string
    return 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return Math.floor(Math.random() * 16).toString(16);
    });
  }
  
  // use the generateUserID function to generate a unique ID for each user
  let userID = generateUserID();
  
  // store the userID in local storage so that it can be retrieved later
  localStorage.setItem("userID", userID);
console.log(userID)

// ..............get user videos api .....................


async function getvideos(){
    const response = await fetch(`https://youtube-api-beta.vercel.app/video/all/${userID}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
});
const data = await response.json();
console.log(data);

}
getvideos()

















