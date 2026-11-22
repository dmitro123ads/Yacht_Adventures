const check_menu = document.getElementById("check_menu");
const close_burg = document.getElementById("close_burg");
const burger = document.getElementById("burger");

check_menu.addEventListener("click", ()=>{
    burger.style.display = "grid";
    
    
})

close_burg.addEventListener("click", ()=>{
    burger.style.display = "none";
})