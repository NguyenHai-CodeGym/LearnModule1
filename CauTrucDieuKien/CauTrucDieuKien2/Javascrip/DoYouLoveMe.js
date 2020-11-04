function yesclick() {
    alert("Love You Too <3 !");
}
function noHover() {
    var x = Math.round(Math.random() * window.innerHeight);
    var y = Math.round(Math.random() * window.innerWidth);
    document.getElementById('btnNo').style.left = x + "px";
    document.getElementById('btnNo').style.top = y + "px";
}