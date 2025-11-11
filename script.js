// On selecting the harmburg-button the side nav shows so selecting the sidenav var  ;
var sidenav = document.querySelector(".sidenavbar");

function shownav(event){
    event.preventDefault();
    sidenav.style.left = "0";
    sidenav.style.transition="1.5s";

}
function notshow(event){
    event.preventDefault();
    sidenav.style.left = "-80%";
    sidenav.style.transition="1s";
}