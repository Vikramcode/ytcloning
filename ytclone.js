var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click" , function(){
    sidebar.classList.toggle("small-sidebar");
})