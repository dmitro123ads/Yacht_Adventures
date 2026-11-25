const check_menu = document.getElementById("check_menu");
const close_burg = document.getElementById("close_burg");
const burger = document.getElementById("burger");

check_menu.addEventListener("click", ()=>{
    burger.style.display = "grid";
    
    
})

close_burg.addEventListener("click", ()=>{
    burger.style.display = "none";
})

const form_menu = document.getElementById("form_menu");
const form_close = document.getElementById("form_close");
const form = document.getElementById("form");

form_menu.addEventListener("click", ()=>{
    form.style.display = "grid";
    
    
})

form_close.addEventListener("click", ()=>{
    form.style.display = "none";
})