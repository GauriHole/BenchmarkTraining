// Modal Form
const modal = document.getElementById("loginModal") as HTMLDivElement;
const closeButton = document.getElementsByClassName("close")[0] as HTMLSpanElement;;
window.onload = function ():void {
    modal.style.display = "block";
};
closeButton.onclick = function ():void {
    modal.style.display = "none";
};
window.onclick = function (event:MouseEvent) :void{
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

