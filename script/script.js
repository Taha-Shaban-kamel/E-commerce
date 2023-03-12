let menu = document.getElementsByClassName("drobMenu");
function myfun(x) {
    x.classList.toggle("change");
    menu.classList.toggle("drobMenu_visible");
}
let sub = document.getElementById("subM");
let borImg = document.getElementsByClassName("usImg");
function toggleM(_y) {
    sub.classList.toggle("user_info_visible");
}
function toggleImg(_y) {
    borImg.classList.toggle("usrImg");
    
}
    
