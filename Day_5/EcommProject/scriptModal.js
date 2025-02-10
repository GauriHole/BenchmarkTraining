// Modal Form
var modal = document.getElementById("loginModal");
var closeButton = document.getElementsByClassName("close")[0];
window.onload = function () {
    modal.style.display = "block";
};
closeButton.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
